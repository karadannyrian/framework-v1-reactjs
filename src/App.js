import React, { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import UnderConstruction from './UnderConstruction';
import DefaultConfig from './config';
import LoginPage from './pages/auth/LoginPage';
import ForgotPassword from './pages/auth/ForgotPassword';

const router = createBrowserRouter([
  {
    path: "*",
    element: <UnderConstruction />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/signin",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  useEffect(() => {
    document.title = DefaultConfig.Application.appName;
  }, []);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
