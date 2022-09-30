import axios from "axios";
const REQUESTS_REST_API_URL = "http://localhost:8080/requests";

class RequestService {
    getAllRequests() {
        return axios.get(REQUESTS_REST_API_URL + "/all");
    }

    getAllSubmittedRequests() {
        return axios.get(REQUESTS_REST_API_URL + "/submitted")
    }

    getRequestsOfCustomer(id) {
        return axios.get(REQUESTS_REST_API_URL + "/customer/" + id) // You CAN'T wrap id with {},and CAN'T pass {id} either
    }

    makeRequest(request) {
        return axios.post(REQUESTS_REST_API_URL + "/make", request)
    }

    handleRequest(id, updatedStatus) {
        return axios.put(REQUESTS_REST_API_URL + "/handle/" + id, updatedStatus) // You CAN'T wrap id with {},and CAN'T pass {id} either
    }

}

export default new RequestService();