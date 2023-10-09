import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './layout/Layout';

import HomePage from './pages/Home';
import Surah from './pages/Surah';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

