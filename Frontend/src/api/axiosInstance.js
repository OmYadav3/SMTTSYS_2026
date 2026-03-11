import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/report',
    timeout: 10000,

});

export default axiosInstance;