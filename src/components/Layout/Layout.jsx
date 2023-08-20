import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from 'components/Header/Header';
import MainPage from 'pages/MainPage/MainPage';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/auth-selectors';

function Layout() {
  const isAuth = useSelector(selectIsAuth);
  return (
    <MainPage>
      {isAuth && <Header />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainPage>
  );
}

export default Layout;
