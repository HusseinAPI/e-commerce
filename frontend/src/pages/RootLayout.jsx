import React, { useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/ShopSlice';
import { setFavourite } from '../store/AuthSlice';

const RootLayout = () => {
  const user = useSelector((state) => state.AuthSlice.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    if (user.length !== 0) {
      const data = {
        id: user._id,
        product: { type: 'getFavourite' },
      };
      dispatch(setFavourite(data));
    }
  }, [dispatch, user]);

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
