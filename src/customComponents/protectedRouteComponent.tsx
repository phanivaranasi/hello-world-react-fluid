import * as React from 'react';
import { Redirect, Route } from 'react-router';
import loginHelper from '../helper/loginHelper';
import { IRouteProps } from '../model';



class ProtecteRoute extends Route<IRouteProps>{
    constructor(props: IRouteProps) {
        super(props);
    }

    render() {
        let redirectPath: string = '';
        console.log(loginHelper.IsAuthenticated());
        if (!loginHelper.IsAuthenticated()) {
            redirectPath = "/login";
        } 
        console.log('***** Redirected Path *****',redirectPath);
        if (redirectPath) {
            const renderComponent = () => (<Redirect to={{ pathname: redirectPath }} />);
            return <Route {...this.props} component={renderComponent} render={undefined}  />;
        } else {
            return <Route {...this.props} />;
        }
    }
}

export default ProtecteRoute;