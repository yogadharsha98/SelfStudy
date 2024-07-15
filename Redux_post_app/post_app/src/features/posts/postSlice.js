import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "It's easy",
  },
  {
    id: '2',
    title: 'React',
    content: 'React content',
  },
];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;
