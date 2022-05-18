import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginForm() {
    const { login } = useAuth();
    const [inputData, setInputData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("/api/auth/login", inputData);
            login(data);
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div className="col-md-6 m-auto mt-5">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h3>Login</h3>
                    </div>
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label
                                htmlFor="staticEmail"
                                className="col-sm-2 col-form-label"
                            >
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="staticEmail"
                                    name="email"
                                    onChange={handleInputChange}
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label
                                htmlFor="inputPassword"
                                className="col-sm-2 col-form-label"
                            >
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    name="password"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Login
                        </button>
                        <NavLink className="btn btn-link" to="/signup">
                            Don't have an account? Signup here
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
