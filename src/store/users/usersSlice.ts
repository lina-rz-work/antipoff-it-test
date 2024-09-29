import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUsersData } from '../../types/IUsersData';
import { IUser } from '../../types/IUser';

export type TDataLike = {
  id: number;
};

export interface IUsersState {
  page: number;
  data: IUser[];
  total_pages: number;
  error: string;
  loading: boolean;
  dataLike: TDataLike[];
}

const initialState: IUsersState = {
  page: 1,
  data: [],
  total_pages: 0,
  error: '',
  loading: false,
  dataLike: [],
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (pageNumber: number) => {
    const response = await axios.get<IUsersData>(`https://reqres.in/api/users?page=${pageNumber}`);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload;
    },
    changeLikeUser(state, action) {
      const existingUser = state.dataLike.find(userId => userId === action.payload);
      
      if (existingUser) {
        state.dataLike = state.dataLike.filter(userId => !(userId === action.payload));
        return;
      }
      state.dataLike = [...state.dataLike, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.page = action.payload.page;
        state.data = action.payload.data;
        state.total_pages = action.payload.total_pages;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { setCurrentPage, changeLikeUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
