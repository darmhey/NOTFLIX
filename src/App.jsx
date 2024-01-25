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
    </>
  );
}

export default App;
