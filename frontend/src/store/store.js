import { configureStore } from '@reduxjs/toolkit';
import ShopSlice from './ShopSlice';
import AuthSlice from './AuthSlice';

const store = configureStore({
  reducer: { ShopSlice, AuthSlice },
});

export default store;
