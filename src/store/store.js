import {combineReducers, configureStore} from '@reduxjs/toolkit';
import rolereducer from './reducers/rolereducer';

const rootreducer = combineReducers({
  roles: rolereducer,
});

const store = configureStore({
  reducer: rootreducer,
});

export default store;
