import { useSelector, useDispatch } from "react-redux";
import { fetchTopRatedData, selectTopRatedList } from "./topRatedSlice";
import { useEffect } from "react";

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
    <section className="text-white" key={item.id}>
      <h3>{item.title}</h3>
    </section>
  ));
  return (
    <>
      <h2 className="text-white p-4 text-lg font-bold uppercase">Top Rated</h2>
      {renderedList}
    </>
  );
};
