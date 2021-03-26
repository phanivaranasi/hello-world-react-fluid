import * as React from "react";
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { getTinyliciousContainer } from "@fluidframework/get-tinylicious-container";
import { getDefaultObjectFromContainer } from "@fluidframework/aqueduct";

import App from "./app";

import '../assets/style.scss';
import { AppContainerFactory } from "../app.fluid.container";
import { UserLang } from "../fluidComponents";


let createNew = false;
if (window.location.hash.length === 0) {
    createNew = true;
    window.location.hash = Date.now().toString();
}
const documentId = window.location.hash.substring(1);



async function initApp() {
    const container = await getTinyliciousContainer(
        documentId,
        AppContainerFactory,
        createNew
    );
    
    const defaultObject = await getDefaultObjectFromContainer<UserLang>(container);
    
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById("rtf")
    
    )
}