import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateOutlet() {
    const { loggedIn } = useAuth();
    return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
