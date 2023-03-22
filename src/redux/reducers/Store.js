// import { createStore, combineReducers} from 'redux';

import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from './Reducers';
import stringReducer from './Reducer2';

 const myStore = configureStore({
  reducer: {
    LoginReducer,
    stringReducer
  },
});

export default myStore;
