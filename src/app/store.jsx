import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "../features/trending/trendingSlice";
import popularSlice from "../features/popular/popularSlice";
import topRatedSlice from "../features/topRated/topRatedSlice";
import upcomingSlice from "../features/upcoming/upcomingSlice";

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    trending: trendingReducer,
    popular: popularSlice,
    topRated: topRatedSlice,
    upcoming: upcomingSlice,
  },
});
