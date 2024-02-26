import { useSelector, useDispatch } from "react-redux";
import { fetchUpcomingData, selectUpcoming } from "./upcomingSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import Loading from "../../components/Loading";

export const UpcomingList = () => {
  const upcomingList = useSelector(selectUpcoming);

  const dispatch = useDispatch();
  const upcomingListStatus = useSelector((state) => state.upcoming.status);

  useEffect(() => {
    if (upcomingListStatus === "idle") {
      dispatch(fetchUpcomingData());
    }
  }, [upcomingListStatus, dispatch]);

  const renderedList = upcomingList.map((item) => (
    <Link key={item.id} to={`/upcoming/${item.id}`}>
      <MovieCard
        title={item.title}
        releaseDate={item.release_date}
        posterPath={item.poster_path}
      />
    </Link>
  ));

  const renderThis = () =>
    upcomingListStatus === "loading" ? (
      <Loading />
    ) : upcomingListStatus === "succeeded" ? (
      renderedList
    ) : null;

  return (
    <>
      <h2 className="text-white p-4 text-lg font-bold uppercase">
        Upcoming Movies
      </h2>
      <div className="grid grid-cols-list-1 sm:grid-cols-list gap-8 place-content-center px-3">
        {renderThis()}
      </div>
    </>
  );
};
