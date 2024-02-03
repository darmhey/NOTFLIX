import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTrending } from "../../api/client";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchTrendingData = createAsyncThunk(
  "posts/fetchTrendingPosts",
  async () => {
    const response = await fetchTrending();
    return response;
  }
);
const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTrendingData.pending, (state) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(fetchTrendingData.fulfilled, (state, action) => {
        state.status = "succeeded";
        //state.posts = state.posts.concat(action.payload);
        state.posts = action.payload;
        console.log("succeeded");
        console.log(state.posts);
      })
      .addCase(fetchTrendingData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(state.error);
        console.log("failed");
      });
  },
});

export const selectTrending = (state) => state.trending.posts;
export default trendingSlice.reducer;
