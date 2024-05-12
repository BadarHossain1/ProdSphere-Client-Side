import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className="w-full h-full flex justify-center items-center"><span className="loading loading-spinner loading-xl bg-blue-600"></span></div>

    }
    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} replace />

    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;