import { Observable } from "rxjs";


export interface crudProps<T>{
    get:(url:string)=>Observable<Array<T>>;
    delete:(url:string,id:any)=>void;
    add: (url: string, item: T) => void;
    update: (url: string, item: T) => void;
    change: Observable<boolean> | undefined;
}