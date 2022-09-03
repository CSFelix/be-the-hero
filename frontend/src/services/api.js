import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333' // backend URL
});

export default api;