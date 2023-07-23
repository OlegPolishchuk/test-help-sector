import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from 'api/api';
import { Post } from 'models/Post';

export const getPosts = createAsyncThunk<Post[]>(
  'post/getPosts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchPosts();
      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e);

      return rejectWithValue('Some error in getPosts thunk');
    }
  },
);
