import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const PublicRoute = ({ children }) => {
    const getToken = Cookies.get('token');
    
    if (!getToken || getToken === "" || getToken === "undefined") {
        // user is not authenticated
        return children;
    }
    return <Navigate to="/dashboard" />;
};

export default PublicRoute;