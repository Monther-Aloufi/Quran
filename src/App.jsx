import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './layout/Layout';

import HomePage, { loader as homeLoader } from './pages/Home';
import Surah, { loader as surahLoader } from './pages/Surah';
import SurahInfo, { loader as surahInfoLoader } from './pages/SurahInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      { index: true, element: <HomePage />, loader: homeLoader },
      {
        path: ':surahId',
        id: 'surah',
        loader: surahLoader,
        children: [
          { index: true, element: <Surah /> },
          { path: 'info', element: <SurahInfo />, loader: surahInfoLoader },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
