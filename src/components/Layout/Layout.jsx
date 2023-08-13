import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import MainPage from 'pages/MainPage/MainPage';

function Layout() {
  return (
    <MainPage>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainPage>
  );
}

export default Layout;
