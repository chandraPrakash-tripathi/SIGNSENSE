import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    accessToken: Cookies.get('signsense-eccb4-access-token') ? Cookies.get('signsense-eccb4-access-token') : null,
    user: Cookies.get('signsense-eccb4-user') ? JSON.parse(Cookies.get('signsense-eccb4-user')) : null,
    loading: false
}

const authenticSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{

        loginRequest:(state)=>{
            state.loading = true;
        },
        loginSucess:(state,action)=>{
            state.accessToken = action.payload;
            state.loading = false;
        },
        loginFail: (state, action) => {
            state.accessToken = null;
            state.loading = false;
            state.error = action.payload;
        },
        loadingProfile: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.accessToken = null;
            state.user = null;
        }

    }
})

export const { loginRequest, loginSuccess, loginFail, loadingProfile, logout } = authenticSlice.actions;
export default authenticSlice.reducer;