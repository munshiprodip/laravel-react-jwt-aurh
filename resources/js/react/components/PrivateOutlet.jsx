import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import RootContext from "../lib/contexts/RootContext";

function PrivateOutlet() {
    const { loggedIn } = useContext(RootContext);
    return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
