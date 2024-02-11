import { useSelector, useDispatch } from "react-redux";
import { fetchPopularData, selectPopularList } from "./popularSlice";
import { useEffect } from "react";
import MovieCard from "../../components/MovieCard";

export const PopularList = () => {
  const popularList = useSelector(selectPopularList);
  const dispatch = useDispatch();

  const popularListStatus = useSelector((state) => state.popular.status);

  useEffect(() => {
    if (popularListStatus === "idle") {
      dispatch(fetchPopularData());
    }
  }, [popularListStatus, dispatch]);

  const renderedList = popularList.map((item) => (
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
