import { useContext } from 'react';
import { AuthContext } from '../context/context/AuthProvider/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth
};

export default useAuth;