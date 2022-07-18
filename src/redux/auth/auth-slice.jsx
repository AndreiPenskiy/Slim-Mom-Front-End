import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  setTempParameters,
  refreshParameters,
} from './auth-options';

const initialState = {
  user: { name: null, email: null, notAllowedProducts: [] },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
  tempParameters: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isRefresh = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isRefresh = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefresh = false;
    },
    [setTempParameters](state, { payload }) {
      state.tempParameters = payload;
    },

    [refreshParameters.fulfilled](state, { payload }) {
      state.user = { ...state.user, ...payload };
    },
  },
});

export default authSlice.reducer;
