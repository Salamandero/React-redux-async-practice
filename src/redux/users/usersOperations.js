import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'http://localhost:8080';

export const fetchAll = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchDelete = createAsyncThunk(
  'users/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`, {
        headers: {
          authorization: 'admin',
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAdd = createAsyncThunk(
  'users/add',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users`, user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
