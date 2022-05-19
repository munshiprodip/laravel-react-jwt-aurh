import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RootContext from "../lib/contexts/RootContext";

function Login() {
    const { loggedIn } = useContext(RootContext);
    return loggedIn ? <Navigate to="/" /> : <LoginForm />;
}

export default Login;
