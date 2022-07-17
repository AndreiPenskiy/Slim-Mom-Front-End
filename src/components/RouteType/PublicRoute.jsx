import { getLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, redirectPath = '/diary', restricted = false }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  if (shouldRedirect) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};