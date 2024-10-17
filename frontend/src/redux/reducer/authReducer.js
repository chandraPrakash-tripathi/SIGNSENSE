import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser } from '../actions/authaction'  // Import your thunks

// Get access token and user from cookies
const accessTokenFromCookies = Cookies.get('signsense-eccb4-access-token');
const userFromCookies = Cookies.get('signsense-eccb4-user');

const initialState = {
  accessToken: accessTokenFromCookies ? accessTokenFromCookies : null,
  user: userFromCookies ? JSON.parse(userFromCookies) : null,
  loading: false,
  error: null,  // Include error field for handling login failures
};

const authenticSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.profile;
        state.loading = false;
        Cookies.set('signsense-eccb4-access-token', action.payload.accessToken, { expires: 7, path: '/' });
        Cookies.set('signsense-eccb4-user', JSON.stringify(action.payload.profile), { expires: 7, path: '/' });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.accessToken = null;
        state.user = null;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.accessToken = null;
        state.user = null;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authenticSlice.reducer;
