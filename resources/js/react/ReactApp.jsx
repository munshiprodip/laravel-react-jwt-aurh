import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContext from "./lib/contexts/AuthContext";

function ReactApp() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [authUser, setAuthUser] = useState({});

    return (
        <BrowserRouter>
            <AuthContext.Provider
                value={{ loggedIn, setLoggedIn, authUser, setAuthUser }}
            >
                <App />
            </AuthContext.Provider>
        </BrowserRouter>
    );
}

export default ReactApp;

if (document.getElementById("root")) {
    ReactDOM.render(<ReactApp />, document.getElementById("root"));
}
