import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  id: null,
  isLoggedIn: false,
  dragons: [],
  favorites: [],
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['dragons', 'user'],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken(state, { payload }) {
      state.token = payload;
    },
    removeUser(state) {
      state.id = null;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    setUser(state, { payload }) {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.id = payload.id;
    },
    setDragons(state, { payload }) {
      state.dragons = payload;
    },
    setFavorites(state, { payload }) {
      state.favorites = payload;
    },
    clearFavorites(state) {
      state.favorites = [];
    },
  },
});

export const {
  setAuthToken,
  removeUser,
  setUser,
  clearFavorites,
  setFavorites,
  setDragons,
} = authSlice.actions;

export const persistSliceAuth = persistReducer(
  persistConfig,
  authSlice.reducer
);
