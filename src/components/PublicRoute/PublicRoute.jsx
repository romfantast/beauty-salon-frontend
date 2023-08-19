import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { selectToken } from 'redux/auth/auth-selectors';

export default function PublicRoute() {
  //   const token = useSelector(selectToken);
  // const token = 'qwe123'
  const token = '';
  return token ? <Navigate to="/someprivatelink" /> : <Outlet />;
}
