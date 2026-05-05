import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

export const getTransactions = async () => {
    try {
        const response = await API.get('transactions/');
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message);
        return [];
    }
};