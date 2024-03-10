import axios from "axios";

const baseUrl = 'http://localhost:8000/'

const Axiosinstance=axios.create({
    baseURL:baseUrl,
    headers:{
        'Content-Type':"application/json",
        Accept:"application/json"
    }
})

export default Axiosinstance;