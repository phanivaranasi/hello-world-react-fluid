import * as React from 'react';
import * as LoginService from '../services';
import { TextField, Link, PrimaryButton } from '@fluentui/react';
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
        return (
            <div>
                <div className="loginForm">
                    <form autoComplete="off">
                        <div className="logoBlock">
                            <img src='src/logo.png' alt="logo" />
                        </div>
                        <TextField autoComplete="off" label='User Name' placeholder="User Name" />
                        <TextField autoComplete="off" label='Password' type='password' placeholder="Password" />
                        <div className="floatBlock">
                            {/* <Toggle className="loginToggle" label="Remember" inlineLabel /> */}
                            <Link className="floatLeft forgotLink" href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link">
                                Forgot Password ?
                        </Link>
                            <PrimaryButton onClick={this.onLoginClick} className="floatRight PrimaryBtn" text="Login" allowDisabledFocus />
                        </div>
                    </form>
                </div>
            </div>)
    }
}


export default LoginComponent;