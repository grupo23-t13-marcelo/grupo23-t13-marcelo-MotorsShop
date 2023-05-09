import axios from "axios"

export const api = axios.create({
     baseURL: "https://motorshopwebservice.onrender.com/",
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

