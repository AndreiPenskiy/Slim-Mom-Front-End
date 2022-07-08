import { getLoggedIn } from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectPath = '/' }) => {
  const isAuth = getLoggedIn();
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PrivateRoute;
