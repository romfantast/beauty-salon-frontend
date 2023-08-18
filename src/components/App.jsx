import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import PublicRoute from './PublicRoute/PublicRoute';
import { OnBoard } from 'pages/OnBoardPage/OnBoard';
import { NotFound } from 'pages/NotFound/NotFound';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/auth-selectors';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {!isAuth && <Route index element={<OnBoard />} />}
        <Route path="nearby" element={<h1>nearby</h1>} />
        <Route path="appointments" element={<h1>appointments</h1>} />
        <Route path="profile" element={<h1>profile</h1>} />
        <Route path="/" element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
