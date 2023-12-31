import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const token = useSelector(selectToken);
  return token ? <Outlet /> : <Navigate to="/" />;
}
