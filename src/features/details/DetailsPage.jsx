import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ActiveContext } from "../../Layout";

import { selectUpcoming } from "../upcoming/upcomingSlice";
import { selectTrending } from "../trending/trendingSlice";
import { selectPopularList } from "../popular/popularSlice";
import { selectTopRatedList } from "../topRated/topRatedSlice";

export const DetailsPage = () => {
  const [active] = useContext(ActiveContext);
  const { id } = useParams();
  const numericId = parseInt(id);

  const upcoming = useSelector(selectUpcoming);
  const trending = useSelector(selectTrending);
  const popular = useSelector(selectPopularList);
  const topRated = useSelector(selectTopRatedList);
  console.log(upcoming);
  console.log(typeof upcoming);

  let movie;
  switch (active) {
    case 0:
      movie = trending.find((movie) => movie.id === numericId);
      break;
    case 1:
      movie = popular.find((movie) => movie.id === numericId);
      break;
    case 2:
      movie = topRated.find((movie) => movie.id === numericId);
      break;
    case 3:
      movie = upcoming.find((movie) => movie.id === numericId);
      break;
  }

  return (
    <>
      <div>
        <h1 className="text-white">Movie Details</h1>
        <h1 className="text-white">{movie.id}</h1>
        <h1 className="text-white">{movie.title}</h1>
      </div>
    </>
  );
};
