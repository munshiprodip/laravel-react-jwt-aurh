import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

function ReactApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default ReactApp;

if (document.getElementById("root")) {
    ReactDOM.render(<ReactApp />, document.getElementById("root"));
}
