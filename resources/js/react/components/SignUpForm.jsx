import React from "react";
import { NavLink } from "react-router-dom";

function SignUpForm() {
    return (
        <div className="col-md-6 m-auto mt-5">
            <div className="card">
                <div className="card-header">
                    <h3>Sign Up</h3>
                </div>
                <div className="card-body">
                    <div className="mb-3 row">
                        <label
                            htmlFor="fullName"
                            className="col-sm-2 col-form-label"
                        >
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                placeholder="Prodip M"
                            />
                        </div>
                    </div>

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
                            />
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary btn-block">
                        Sign Up
                    </button>
                    <NavLink className="btn btn-link" to="/login">
                        Already have an account? Sign in here
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
