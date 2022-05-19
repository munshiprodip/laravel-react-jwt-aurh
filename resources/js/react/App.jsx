import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import PreLoader from "./components/PreLoader";
import PrivateOutlet from "./components/PrivateOutlet";
import useAuth from "./hooks/useAuth";
import RootContext from "./lib/contexts/RootContext";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    const { loading, setLoading } = useContext(RootContext);
    const { refreshJWT } = useAuth();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            refreshJWT(token);
        } else {
            setLoading(false);
        }
    }, []);

    return loading ? (
        <PreLoader />
    ) : (
        <div className="container">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={<PrivateOutlet />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
