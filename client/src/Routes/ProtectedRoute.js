import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ component }) => {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn) {
        return component;
    }

    return <Navigate to="/" />;
};

export default ProtectedRoute;