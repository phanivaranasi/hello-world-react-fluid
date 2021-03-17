import { RouteProps } from "react-router";

export interface IRouteProps extends RouteProps {

    isAuthUser:boolean;
    role:string;


}