import axios from 'axios';

// This logic tells the app: "Use the Vercel variable if it exists, otherwise use local."
const API_URL = process.env.NEXT_PUBLIC_API_URL 
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/` 
    : 'http://127.0.0.1:8000/api/';

const API = axios.create({
    baseURL: API_URL,
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