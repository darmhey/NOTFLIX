import { useSelector, useDispatch } from "react-redux";
import { fetchTopRatedData, selectTopRatedList } from "./topRatedSlice";
import { useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import Loading from "../../components/Loading";

export const TopRatedList = () => {
  const topRatedList = useSelector(selectTopRatedList);
  const dispatch = useDispatch();
  const topRatedListStatus = useSelector((state) => state.topRated.status);

  useEffect(() => {
    if (topRatedListStatus === "idle") {
      dispatch(fetchTopRatedData());
    }
  }, [topRatedListStatus, dispatch]);

  const renderedList = topRatedList.map((item) => (
    <MovieCard
      key={item.id}
      title={item.title}
      releaseDate={item.release_date}
      posterPath={item.poster_path}
    />
  ));
  const renderThis = () =>
    topRatedListStatus === "loading" ? (
      <Loading />
    ) : topRatedListStatus === "succeeded" ? (
      renderedList
    ) : null;

  return (
    <>
      <h2 className="text-white p-4 text-lg font-bold uppercase">
        Top Rated Movies
      </h2>
      <div className="grid grid-cols-list-1   sm:grid-cols-list gap-8 place-content-center px-3">
        {renderThis()}
      </div>
    </>
  );
};
