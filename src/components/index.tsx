import * as React from "react";
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./app";

import '../assets/style.scss';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("rtf")

)