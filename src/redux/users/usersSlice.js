import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAdd,
  fetchAll,
  fetchChangeUser,
  fetchDelete,
} from './usersOperations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAll.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDelete.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchDelete.fulfilled, (state, action) => {
        //           const index = state.users.findIndex(user => user.id === action.payload);
        // index.slice(index, 1)
        state.users = state.users.filter(user => user.id !== action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchDelete.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAdd.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAdd.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAdd.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchChangeUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchChangeUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          user => user.id === action.payload.id
        );
        state.users[index] = action.payload;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchChangeUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const usersSliceReducer = usersSlice.reducer;
