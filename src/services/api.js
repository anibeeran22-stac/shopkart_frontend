import axios from "axios";

const api = axios.create({
    baseURL: "https://shopkart-backend-x8lt.onrender.com/api"
});

export default api;