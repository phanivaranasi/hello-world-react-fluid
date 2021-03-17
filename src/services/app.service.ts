import { defer, Observable, Subject } from "rxjs";
import { appServiceRequestConfiguration, initialization } from "./app.service.config";
import { map } from 'rxjs/operators';

const axiosInstance = initialization(appServiceRequestConfiguration);



const get = <T>(url: string, queryParams?: object): Observable<T> => {
    return defer(() => axiosInstance.get<T>(url, { params: queryParams }))
        .pipe(map(res => res.data))
}
const post = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(() => axiosInstance.post<T>(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

const put = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(() => axiosInstance.put<T>(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

const patch = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(() => axiosInstance.patch<T>(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

const deleteR = <T>(url: string, id: number): Observable<T | void> => {
    return defer(() => (axiosInstance.delete(`${url}/${id}`)))
        .pipe(map(result => result.data)
        );
};

export const useObservable = () => {
    const subj = new Subject<boolean>();

    const next = (value: boolean): void => {
        subj.next(value)
    };

    return { change: subj.asObservable(), next };
};

export default { get, post, put, patch, delete: deleteR, asObservable: useObservable }