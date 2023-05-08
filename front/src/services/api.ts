import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

export const karsApi = axios.create({
    baseURL: "https://kenzie-kars.herokuapp.com/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

