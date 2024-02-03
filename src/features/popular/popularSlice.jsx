import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopular } from "../../api/client";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPopularData = createAsyncThunk(
  "posts/fetchPopularPosts",
  async () => {
    const response = await fetchPopular();
    return response;
  }
);
const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPopularData.pending, (state) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(fetchPopularData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
        console.log("succeeded");
        console.log(state.posts);
      })
      .addCase(fetchPopularData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(state.error);
        console.log("failed");
      });
  },
});

export const selectPopularList = (state) => state.popular.posts;
// export const selectPopularById = (state, postId) =>
//   state.posts.find(post => post.id === postId)

export default popularSlice.reducer;
