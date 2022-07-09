import { getLoggedIn } from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, redirectPath = '/', restricted = false }) => {
  const isAuth = getLoggedIn();
  const shouldRedirect = isAuth && restricted;
  if (shouldRedirect) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PublicRoute;
