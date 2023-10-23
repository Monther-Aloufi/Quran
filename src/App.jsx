import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// PAGES
import HomePage from './pages/Home';
import Surah from './pages/Surah';
import SurahInfo from './pages/SurahInfo';

// COMPONENTS
import { Layout } from './layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      { index: true, element: <HomePage /> },
      {
        path: ':surahId',
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
