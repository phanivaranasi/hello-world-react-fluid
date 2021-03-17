import * as React from 'react';
import * as LoginService from '../services';
import { PrimaryButton } from '@fluentui/react'
import { Redirect } from 'react-router';



interface ILoginState {

    isLoading: boolean;


}

class LoginComponent extends React.Component<{}, ILoginState> {

    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: null
        }
    }

    componentDidMount() {
        localStorage.clear();
    }

    onLoginClick = () => {
        this.setState({ isLoading: true }, () => {
            LoginService.signIn({ userName: 'admin', password: 'admin' }).then((res: any) => {
                this.setState({ isLoading: false })
                console.log("***** LOGING RESP *****", res);
                localStorage.setItem('token', res.token);
                return <Redirect to="/dashboard" />
            })
        })

        console.log("***** LOGIN CLICK ******");


    }

    render() {
        return (<div>
            Login
            <PrimaryButton text="Login" onClick={this.onLoginClick} />

        </div>)
    }
}


export default LoginComponent;