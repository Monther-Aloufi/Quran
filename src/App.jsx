import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './layout/Layout';

import HomePage, { loader as homeLoader } from './pages/Home';
import Surah, { loader as surahLoader } from './pages/Surah';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage />, loader: homeLoader },
      {
        path: ':surahId',
        element: <Surah />,
        loader: surahLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
