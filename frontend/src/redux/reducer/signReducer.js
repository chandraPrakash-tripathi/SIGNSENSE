import { createSlice } from '@reduxjs/toolkit';
import { fetchSignData, addSignData, fetchTopUsers } from '../actions/signdataaction'; // Update imports

const signSlice = createSlice({
  name: 'sign',
  initialState: {
    signDataList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchSignData lifecycle
      .addCase(fetchSignData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSignData.fulfilled, (state, action) => {
        state.signDataList = action.payload;
        state.loading = false;
      })
      .addCase(fetchSignData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle addSignData lifecycle
      .addCase(addSignData.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSignData.fulfilled, (state, action) => {
        state.loading = false;
        state.signDataList.push(action.payload);
      })
      .addCase(addSignData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const topSignUsersSlice = createSlice({
  name: 'topSignUsers',
  initialState: {
    topUsers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchTopUsers lifecycle
      .addCase(fetchTopUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTopUsers.fulfilled, (state, action) => {
        state.topUsers = action.payload;
        state.loading = false;
      })
      .addCase(fetchTopUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const signReducer = signSlice.reducer;
export const topSignUsersReducer = topSignUsersSlice.reducer;
