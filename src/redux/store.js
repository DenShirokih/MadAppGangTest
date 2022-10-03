import { configureStore } from '@reduxjs/toolkit';
import { persistSliceAuth } from './sliceAuth';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



export const store = configureStore({
    reducer: {
      auth: persistSliceAuth
    },
    middleware: getDefaultMiddleware => [ ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),],
  });
  
  export const persistor = persistStore(store)
