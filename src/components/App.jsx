import React, { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import Layout from './Layout/Layout';
import PublicRoute from './PublicRoute/PublicRoute';
import { OnBoard } from 'pages/OnBoardPage/OnBoard';
import { NotFound } from 'pages/NotFound/NotFound';
import { selectIsAuth } from 'redux/auth/auth-selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from 'pages/Home/Home';
import { useUnauthorizedUser } from 'hooks/useUnauthorizedUser';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const MyBookings = lazy(() => import('pages/MyBookings/MyBooking'));
const MyProfile = lazy(() => import('pages/MyProfile/MyProfile'));

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();
  useUnauthorizedUser();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          {!isAuth && <Route index element={<OnBoard />} />}
          <Route path="/" element={<PublicRoute />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="nearby" element={<h1>nearby</h1>} />
            <Route path="mybookings" element={<MyBookings />} />
            <Route path="profile" element={<MyProfile />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
