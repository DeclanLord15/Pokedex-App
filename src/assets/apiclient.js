import axios from "axios"

const client = axios.create({
    headers:{
    baseURL: "http://127.0.0.1:8000",
    // "Authorization":
    },
    withCredentials: true
})

export default client