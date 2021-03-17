import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export const appServiceRequestConfiguration: AxiosRequestConfig = {
    baseURL: '',
    responseType: "json",
    headers: {
        'Content-Type': 'application/json'
    }
}

export const initialization = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config);
    axiosInstance.interceptors.request.use(
        request => {

            return request
        },
    )
    return axiosInstance;
}