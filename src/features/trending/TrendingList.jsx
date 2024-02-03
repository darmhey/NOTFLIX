import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingData, selectTrending } from "./trendingSlice";
import { useEffect } from "react";

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
    <section className="text-white" key={item.id}>
      <h3>{item.title}</h3>
    </section>
  ));

  return (
    <>
      <h2 className="text-white p-4 text-lg font-bold uppercase">
        Trending Home
      </h2>
      {renderedList}
    </>
  );
};
