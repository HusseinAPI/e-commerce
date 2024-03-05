import React, { useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/ShopSlice';

const RootLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
