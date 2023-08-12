// import { lazy } from 'react';
// import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import PublicRoute from './PublicRoute/PublicRoute';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';

export const App = () => {
	return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>hello</h1>} />
        <Route path="/" element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <div>
            <h3>Not found</h3>
          </div>
        }
      />
    </Routes>
	  );
};
