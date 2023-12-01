import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
    const getToken = Cookies.get('token');
    
    if (!getToken || getToken === "" || getToken === "undefined") {
        // user is not authenticated
        return <Navigate to="/" />;
    }
    console.log(children)
    return children;
};

export default ProtectedRoute;