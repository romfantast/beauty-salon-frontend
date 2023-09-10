import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

export default function PublicRoute() {
  const token = useSelector(selectToken);
  return token ? <Navigate to="/profile" /> : <Outlet />;
}
