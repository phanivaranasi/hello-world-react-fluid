import appService from './app.service';

export const signIn=(body:any)=>{
    return appService.post("/token",body).toPromise();
}