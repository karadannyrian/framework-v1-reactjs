import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import UnderConstruction from './UnderConstruction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UnderConstruction />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
