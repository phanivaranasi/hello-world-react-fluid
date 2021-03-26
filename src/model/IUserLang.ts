

export interface IUser{
    id:string;
    name:string;
}

export interface IUserLang{
    id:string;
    lang:string;
    user?:IUser;
}



export interface IUserLangDataModel{
    getUsers:()=>IUser[];
    getUser:()=>IUser;
    createLang:()=>void;
}