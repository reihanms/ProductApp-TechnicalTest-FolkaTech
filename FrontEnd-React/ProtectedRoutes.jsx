import { Navigate, Outlet } from "react-router-dom";
import LoginPage from "./src/pages/login";
import { useAuth } from "./src/helpers/AuthContext";

const ProtectedRoutes = () => {
    const {isLoggedIn} = useAuth();
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes;