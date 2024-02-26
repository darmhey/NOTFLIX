import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PopularList } from "./features/popular/PopularList";
import { TopRatedList } from "./features/topRated/TopRatedList";
import { TrendingList } from "./features/trending/TrendingList";
import { UpcomingList } from "./features/upcoming/UpcomingList";
import { DetailsPage } from "./features/details/DetailsPage";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TrendingList />} />
            <Route path="/:id" element={<DetailsPage />} />
            <Route path="topRated" element={<TopRatedList />} />
            <Route path="topRated/:id" element={<DetailsPage />} />
            <Route path="upcoming" element={<UpcomingList />} />
            <Route path="upcoming/:id" element={<DetailsPage />} />
            <Route path="popular" element={<PopularList />} />
            <Route path="popular/:id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
