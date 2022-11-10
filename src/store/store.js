import {combineReducers, configureStore} from '@reduxjs/toolkit';
import rolereducer from './reducers/rolereducer';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import jdreducer from './reducers/jdreducer';

const presistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['jd', 'roles'],
  // blacklist: ['roles', 'jd'],
};

const RootReducer = combineReducers({
  roles: rolereducer,
  jd: jdreducer,
});

const persistedReducer = persistReducer(presistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export {store, persistor};
