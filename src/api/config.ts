import axios from 'axios'

export const jsonmockAPI = axios.create({
    baseURL: "https://jsonmock.hackerrank.com/api/",
    headers: { "Content-Type": "application/json" }
});