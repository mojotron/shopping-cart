import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// layouts
import AppLayout from './layouts/AppLayout/AppLayout';
// pages
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage';
import StorePage from './pages/StorePage/StorePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/store', element: <StorePage /> },
      { path: '/cart', element: <p>Cart</p> },
      { path: '/contact', element: <p>Contact</p> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
