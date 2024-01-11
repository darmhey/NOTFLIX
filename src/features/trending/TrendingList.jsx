import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingData } from "./trendingSlice";
import { useEffect } from "react";

export const TrendingList = () => {
  //const trendingList = useSelector(selectTrending); selectTrending
  const dispatch = useDispatch();
  const trendingListStatus = useSelector((state) => state.trending.status);

  useEffect(() => {
    if (trendingListStatus === "idle") {
      dispatch(fetchTrendingData());
    }
  }, [trendingListStatus, dispatch]);

  // const renderedList = trendingList.map((item) => (
  //   <section key={item.id}>
  //     <h3>{item.title}</h3>
  //   </section>
  // ));

  return (
    <>
      <h2>Trending</h2>
      {/* {renderedList} */}
    </>
  );
};
