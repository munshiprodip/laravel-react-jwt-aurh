import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import AuthContext from "../lib/contexts/AuthContext";

function Login() {
    const { loggedIn } = useContext(AuthContext);
    return loggedIn ? <Navigate to="/" /> : <LoginForm />;
}

export default Login;
