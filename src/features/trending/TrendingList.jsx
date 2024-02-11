import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingData, selectTrending } from "./trendingSlice";
import { useEffect } from "react";
import MovieCard from "../../components/MovieCard";

export const TrendingList = () => {
  const trendingList = useSelector(selectTrending);
  const dispatch = useDispatch();
  const trendingListStatus = useSelector((state) => state.trending.status);

  useEffect(() => {
    if (trendingListStatus === "idle") {
      dispatch(fetchTrendingData());
    }
  }, [trendingListStatus, dispatch]);

  const renderedList = trendingList.map((item) => (
    <MovieCard
      key={item.id}
      title={item.title}
      releaseDate={item.release_date}
      posterPath={item.poster_path}
    />
  ));

  return (
    <>
      <h2 className="text-white p-4 text-lg font-bold uppercase">
        Discover Movies
      </h2>
      <div className="grid  grid-cols-list gap-8 place-content-center px-3">
        {renderedList}
      </div>
    </>
  );
};
