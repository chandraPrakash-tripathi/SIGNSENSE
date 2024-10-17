import { configureStore } from '@reduxjs/toolkit';
// Import your reducers
import authReducer from './reducer/authReducer';
import { signReducer, topSignUsersReducer } from './reducer/signReducer';


// Create the store using configureStore
const store = configureStore({
  reducer: {
    auth: authReducer,
    sign: signReducer,
    topSignUsers: topSignUsersReducer
  },
  
});

export default store;
