import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './index.css';
// context
import { CartContextProvider } from './contexts/CartContext';
// layouts
import AppLayout from './layouts/AppLayout/AppLayout';
// pages
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import StorePage from './pages/StorePage/StorePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ContactPage from './pages/ContactPage/ContactPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/store', element: <StorePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
