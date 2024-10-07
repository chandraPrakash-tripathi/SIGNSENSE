// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

// Import your reducers
import authenticReducer from './reducer/authenticReducer';


// Create the store using configureStore
const store = configureStore({
  reducer: {
    auth: authenticReducer,
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),  // Thunk is included by default, but this shows how to add custom middleware.
});

export default store;
