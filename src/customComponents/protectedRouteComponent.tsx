import * as React from 'react';
import { Redirect, Route } from 'react-router';

import { IRouteProps } from '../model';



class ProtectedRoute extends Route<IRouteProps>{
    constructor(props: IRouteProps) {
        super(props);
    }

    render() {
        let redirectPath: string  = '';
        console.warn(this.props)
        if (!this.props.isAuthUser) {
            redirectPath = "/login";
        }  
        console.log('***** Redirected Path *****', redirectPath, this.props);
        if (redirectPath) {
            console.log("redirectpath true")
            const renderComponent = () => (<Redirect to={{ pathname: redirectPath }} />);
            return <Route {...this.props} component={renderComponent} render={undefined} />;
        } else {
            console.log("redirect path false")
            return <Route {...this.props} />;
        }
    }
}

export default ProtectedRoute;