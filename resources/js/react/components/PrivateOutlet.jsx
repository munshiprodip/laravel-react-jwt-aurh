import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../lib/contexts/AuthContext";

function PrivateOutlet() {
    const { loggedIn } = useContext(AuthContext);
    return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
