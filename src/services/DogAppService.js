import axios from 'axios';

const dogClient = axios.create({
    baseURL: 'https://dog-breed-prediction.herokuapp.com/',
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
