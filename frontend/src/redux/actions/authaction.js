import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../../firebase.js";
import Cookies from "js-cookie";

// Action for Login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (_, { rejectWithValue }) => {
    try {
      // Creating a GoogleAuthProvider instance for Google login
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);

      // Retrieving access token and user profile
      const accessToken = res.user.accessToken;
      const profile = {
        name: res.user.displayName,
        photoURL: res.user.photoURL,
        userId: res.user.uid,
      };

      // Storing the access token and user profile in cookies
      Cookies.set("signsense-eccb4-access-token", accessToken, { expires: 2 });
      Cookies.set("signsense-eccb4-user", JSON.stringify(profile), { expires: 2 });

      // Returning access token and profile as payload
      return { accessToken, profile };
    } catch (error) {
      // Handling errors by rejecting with a custom error message
      return rejectWithValue(error.message);
    }
  }
);

// Action for Logout
export const logoutUser = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    // Signing out the user
    await signOut(auth);

    // Removing cookies
    Cookies.remove('signsense-eccb4-access-token');
    Cookies.remove('signsense-eccb4-user');

    // No need to return anything as logout just clears state
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
