import axios from "axios";

export const api = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:4000",
    timeout: 5000,
});

api.interceptors.request.use(config => {
    console.log("Отправка запроса:", config?.method?.toUpperCase(), config.url);
    return config;
}, error => {
    return Promise.reject(error);
});

api.interceptors.response.use(response => {
    console.log("Ответ получен:", response.status);
    return response;
}, error => {
    console.error("Ошибка ответа:", error.response ? error.response.status : error.message);
    return Promise.reject(error);
});