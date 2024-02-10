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
        Trending Home
      </h2>
      <div className="grid  grid-cols-list gap-8 place-content-center px-3">
        {renderedList}
      </div>
    </>
  );
};

// <div className="text-black grid gap-4 grid-cols-test place-content-center">
//         <div className=" aspect-card bg-red-200">1</div>
//         <div className=" aspect-card bg-red-200">2</div>
//         <div className=" aspect-card bg-red-200">3</div>
//         <div className=" aspect-card bg-red-200">4</div>
//         <div className=" aspect-card bg-red-200">5</div>
//         <div className=" aspect-card bg-red-200">6</div>
//         <div className=" aspect-card bg-red-200">7</div>
//         <div className=" aspect-card bg-red-200">8</div>
//         <div className=" aspect-card bg-red-200">9</div>
//         <div className=" aspect-card bg-red-200">10</div>
//         <div className=" aspect-card bg-red-200">1</div>
//         <div className=" aspect-card bg-red-200">2</div>
//         <div className=" aspect-card bg-red-200">3</div>
//         <div className=" aspect-card bg-red-200">4</div>
//         <div className=" aspect-card bg-red-200">5</div>
//         <div className=" aspect-card bg-red-200">6</div>
//         <div className=" aspect-card bg-red-200">7</div>
//         <div className=" aspect-card bg-red-200">8</div>
//         <div className=" aspect-card bg-red-200">9</div>
//         <div className=" aspect-card bg-red-200">10</div>
//       </div>
