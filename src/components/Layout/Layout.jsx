import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from 'components/Header/Header';
import MainPage from 'pages/MainPage/MainPage';

function Layout() {
  const isAuth = false;
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
