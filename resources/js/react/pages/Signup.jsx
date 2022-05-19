import React, { useContext } from "react";
import SignUpForm from "../components/SignUpForm";
import RootContext from "../lib/contexts/RootContext";

const Signup = () => {
    const { loggedIn } = useContext(RootContext);
    return (
        <div>
            <SignUpForm />
        </div>
    );
};

export default Signup;
