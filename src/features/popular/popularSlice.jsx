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
        //state.posts = state.posts.concat(action.payload);
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

export const selectPopularList = (state) => state.popular;

export default popularSlice.reducer;
