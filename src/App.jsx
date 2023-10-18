import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './layout/Layout';

import HomePage from './pages/Home';
import Surah, { loader as surahLoader } from './pages/Surah';
import SurahInfo from './pages/SurahInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      { index: true, element: <HomePage /> },
      {
        path: ':surahId',
        id: 'surah',
        loader: surahLoader,
        children: [
          { index: true, element: <Surah /> },
          { path: 'info', element: <SurahInfo /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
