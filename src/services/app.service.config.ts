import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export const appServiceRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'https://democmswebapi.azurewebsites.net',
    responseType: "json",
    headers: {
        'Content-Type': 'application/json'
    }
}

export const initialization = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config);
    axiosInstance.interceptors.request.use(
        request => {
            console.log('Start Ajax Call');
            return request
        }, function (error) {
            console.log('error', error);
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(function (response) {
        console.log('Done with Ajax call');
        return response;
    }, function (error) {

        return Promise.reject(error);
    })

    return axiosInstance;
}