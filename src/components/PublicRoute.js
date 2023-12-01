import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const PublicRoute = ({ children }) => {
    const getToken = Cookies.get('token');
    
    if (!getToken || getToken === "" || getToken === "undefined") {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$");
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return <Navigate to="/dashboard" />;
};

export default PublicRoute;