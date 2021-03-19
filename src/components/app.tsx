import * as React from 'react';
import { Route } from 'react-router';

import ProtectedRoute from '../customComponents/protectedRouteComponent';
import DashboardComponent from './dashboardComponent';
import loginHelper from '../helper/loginHelper';
import Layout from './layoutComponent';
import LoginComponent from './loginComponent';

import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react';

const options: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' }

];
const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 },
};




class App extends React.Component {
    render() {

        return (
            <Layout>
                <ProtectedRoute exact path="/dashboard" component={DashboardComponent} role="" isAuthUser={loginHelper.IsAuthenticated()} />
                <ProtectedRoute exact path="" component={DashboardComponent} role="" isAuthUser={loginHelper.IsAuthenticated()} />
                <Route exact path='/login' component={LoginComponent} />
                <div>
                    <Dropdown
                        placeholder="Select an option"
                        label="Basic uncontrolled example"

                        options={options}
                        styles={dropdownStyles}
                    />
                </div>
            </Layout>


        )
    }
}


export default App;