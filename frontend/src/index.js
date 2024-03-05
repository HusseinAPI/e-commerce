import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Category from './pages/Category';
import SelectedProduct from './pages/SelectedProduct';
import Events from './pages/Events';
import Faq from './pages/Faq';
import Login from './pages/Log/Login';
import Signup from './pages/Log/Signup';
import Profile from './pages/Profile';
import CheckOut from './pages/CheckOut';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: `/products/product`, element: <SelectedProduct /> },
      { path: `/products/category`, element: <Category /> },
      { path: '/events', element: <Events /> },
      { path: '/faq', element: <Faq /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/profile', element: <Profile /> },
      { path: '/checkout', element: <CheckOut /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
