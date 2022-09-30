import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CarService from '../services/CarService';

const SaveCarComponent = () => {
    const {  id } = useParams() // the object property must be "id", the same as the path variable "id"
    const [carObj, setCarObj] = useState({});
    const navigate = useNavigate();

    const saveChange = (e) => {
        console.log(carObj)
        e.preventDefault();
        if (id) {
            CarService.updateCar(id, carObj).then(Response => { // CAN'T pass {id} to the function
                navigate("/")
            })
        } else {
            CarService.addCar(carObj).then(Response => {
                navigate("/")
            })
        }
    }

    useEffect(
       
        () => {
            if (id){
                CarService.getCarById(id).then(Response => {
                    setCarObj(Response.data)
                    //console.log("-------------") // Be noted: often use console.log to see your current status and check the provious steps
                    console.log(carObj) // when I use const {  carId } = useParams(), this log didn't display anything!! So, remember to use console.log
                }).catch(e => console.log(e))
            }            
        },[]
    )


    return (
        <div>SaveCarComponent
            <form>
                <div >
                    <label >Year</label>
                    <input type="text" value={carObj.year} onChange={e => setCarObj({ ...carObj,'year': e.target.value })}></input>
                </div>

                <div>
                    <label>Brand</label>
                    <input type="text" value={carObj.brand} onChange={e=> setCarObj({...carObj,'brand':e.target.value})}></input>
                </div>

                <div>
                    <label>Model</label>
                    <input type="text" value={carObj.model} onChange={e => setCarObj({...carObj,'model': e.target.value})}></input>
                </div>

                <div>
                    <label>Price</label>
                    <input type="text" value={carObj.price} onChange={e => setCarObj({...carObj,'price':e.target.value})}></input>
                </div>
                <button onClick={saveChange}>Submit</button>
            </form>
        </div>
    )
}

export default SaveCarComponent