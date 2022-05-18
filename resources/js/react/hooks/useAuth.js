import React from "react";
export default function useAuth() {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [authUser, setAuthUser] = React.useState({});

    const login = (user) => {
        setLoggedIn(true);
        setAuthUser(user);
    };

    return { loggedIn, authUser };
}
