import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PopularList } from "./features/popular/PopularList";
import { TopRatedList } from "./features/topRated/TopRatedList";
import { TrendingList } from "./features/trending/TrendingList";
import { UpcomingList } from "./features/upcoming/UpcomingList";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TrendingList />} />
            <Route path="topRated" element={<TopRatedList />} />
            <Route path="upcoming" element={<UpcomingList />} />
            <Route path="popular" element={<PopularList />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello World</h1>
      <button onClick={fetchTrending}>Fetch Trending</button>
      <button onClick={fetchPopular}>Fetch Popular</button>
      <button onClick={fetchUpcoming}>Fetch Upcoming</button>
      <button onClick={fetchTopRated}>Fetch Top Rated</button> */}
    </>
  );
}

export default App;

// import axios from "axios";

// const client = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   params: {
//     api_key: "ce3da44a232edc8e85c7ad3ff7cc1929",
//   },
// });

// const fetchTrending = async () => {
//   try {
//     const response = await client.get("/trending/movie/week");
//     console.log(response.data.results);
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }
// };
// const fetchPopular = async () => {
//   try {
//     const response = await client.get("/movie/popular");
//     console.log(response.data.results);
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }
// };

// const fetchUpcoming = async () => {
//   try {
//     const response = await client.get("/movie/upcoming");
//     console.log(response.data.results);
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }
// };

// const fetchTopRated = async () => {
//   try {
//     const response = await client.get("/movie/top_rated");
//     console.log(response.data.results);
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }
// };
