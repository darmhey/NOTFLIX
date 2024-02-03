import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTopRated } from "../../api/client";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchTopRatedData = createAsyncThunk(
  "posts/fetchTopRatedPosts",
  async () => {
    const response = await fetchTopRated();
    return response;
  }
);
const topRatedSlice = createSlice({
  name: "topRated",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTopRatedData.pending, (state) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(fetchTopRatedData.fulfilled, (state, action) => {
        state.status = "succeeded";
        //state.posts = state.posts.concat(action.payload);
        state.posts = action.payload;
        console.log("succeeded");
        console.log(state.posts);
      })
      .addCase(fetchTopRatedData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(state.error);
        console.log("failed");
      });
  },
});

export const selectTopRatedList = (state) => state.topRated.posts;

export default topRatedSlice.reducer;
