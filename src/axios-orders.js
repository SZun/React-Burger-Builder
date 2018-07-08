import axios from 'axios';

const instance = axios.create({
    baseURL: ''// Add your firebase link here
});

export default instance;