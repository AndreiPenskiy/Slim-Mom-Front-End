import { getLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, redirectPath = '/' }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
