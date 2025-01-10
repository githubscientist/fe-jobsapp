import axios from "axios";

const baseURL = 'https://be-jobsapp.onrender.com/api/v1';

const instance = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default instance;