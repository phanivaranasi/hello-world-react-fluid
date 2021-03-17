import * as React from 'react';

import {TextField,Link,PrimaryButton } from '@fluentui/react';


class LoginComponent extends React.Component {



    render() {
        return (<div className="loginForm">
             <div className="logoBlock">
         <img src='src/logo.png' alt="logo" />
      </div>
      <TextField label='User Name' placeholder="User Name"/>
      <TextField label='Password' type='password' placeholder="Password" />
      <div className="floatBlock">
            {/* <Toggle className="loginToggle" label="Remember" inlineLabel /> */}
            <Link className="floatLeft forgotLink" href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link">
            Forgot Password ?
            </Link>
            <PrimaryButton className="floatRight PrimaryBtn" text="Login" allowDisabledFocus  />
         </div>
        </div>)
    }
}


export default LoginComponent;