import axios from "axios";
import { useContext } from "react";
import AuthContext from "../lib/contexts/AuthContext";
export default function useAuth() {
    const { setLoggedIn, setAuthUser } = useContext(AuthContext);

    const login = ({ user, access_token }) => {
        setLoggedIn(true);
        setAuthUser(user);
        localStorage.setItem("token", access_token);
    };

    const logout = () => {
        setLoggedIn(false);
        setAuthUser({});
        localStorage.removeItem("token");
    };

    const refreshJWT = async (token) => {
        if (token) {
            try {
                const { data } = await axios.post("/api/auth/refresh/", {
                    token,
                });
                login(data);
            } catch (error) {
                logout();
            }
        } else {
            logout();
        }
    };

    return { login, logout, refreshJWT };
}
