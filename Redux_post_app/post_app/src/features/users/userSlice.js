import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'John' },
  { id: '1', name: 'Kevin' },
  { id: '2', name: 'Dave' },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
