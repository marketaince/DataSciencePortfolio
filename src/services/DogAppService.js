import axios from 'axios';

const dogClient = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    // query custom ingredients from SQL Database
    predictDogClasses(payload) {
        return dogClient.post('/predict', payload)
    }
}
