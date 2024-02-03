import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUpcoming } from "../../api/client";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchUpcomingData = createAsyncThunk(
  "posts/fetchUpcomingPosts",
  async () => {
    const response = await fetchUpcoming();
    return response;
  }
);

const upcomingSlice = createSlice({
  name: "upcoming",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUpcomingData.pending, (state) => {
        state.status = "loading";
        console.log("loading");
      })
      .addCase(fetchUpcomingData.fulfilled, (state, action) => {
        state.status = "succeeded";
        //state.posts = state.posts.concat(action.payload);
        state.posts = action.payload;
        console.log("succeeded");
        console.log(state.posts);
      })
      .addCase(fetchUpcomingData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(state.error);
        console.log("failed");
      });
  },
});
export const selectUpcoming = (state) => state.upcoming.posts;
export default upcomingSlice.reducer;
