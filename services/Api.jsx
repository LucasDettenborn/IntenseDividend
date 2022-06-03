import axios from 'axios';

const api = axios.create({
    baseURL: 'https://yfapi.net/v6/finance/',
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
        'x-api-key': 'wKqPzsSHbqMGrCnOCvBda2v6kS5xEfj2CQJ31cz8'
    }
})

export default api;