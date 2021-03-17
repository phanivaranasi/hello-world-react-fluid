import * as React from 'react';
import { Route } from 'react-router';
import ProtecteRoute from '../customComponents/protectedRouteComponent';
import DashboardComponent from './dashboardComponent';
import loginHelper from '../helper/loginHelper';
import Layout from './layoutComponent';
import LoginComponent from './loginComponent';



class App extends React.Component {
    render() {

        return (
            <Layout>
                <ProtecteRoute role="" isAuthUser={loginHelper.IsAuthenticated()} component={DashboardComponent} />
                <Route path='/login' component={LoginComponent} />
            </Layout>

        )
    }
}


export default App;