import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import loadingReducer from './loader/spinner-slice';
import { productsApi } from './productsApi';
import calculatorSlice from './products/products-slice';
import dairySlice from './diary/diary-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    loading: loadingReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    calculator: calculatorSlice,
    dairy: dairySlice,
  },

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware);
  },

});

export const persistor = persistStore(store);
