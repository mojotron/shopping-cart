import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './index.css';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AppLayout from './layouts/AppLayout/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <p>About</p> },
      { path: '/shop', element: <p>Shop</p> },
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
