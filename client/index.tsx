import React from "react";
import ReactDOM from "react-dom";

// import * as serviceWorker from './serviceWorker';

import { StoreProvider } from "./src/store/Store";
import App from "./src/App";

const root = document.querySelector("#root");
ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    root
);
// serviceWorker.register();
