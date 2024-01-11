import { useSelector, useDispatch } from "react-redux";
import { fetchTopRatedData } from "./topRatedSlice";
import { useEffect } from "react";

export const TopRatedList = () => {
  //const topRatedList = useSelector(selectTopRated); selectTopRated
  const dispatch = useDispatch();
  const topRatedListStatus = useSelector((state) => state.topRated.status);

  // const renderedList = topRatedList.map((item) => (
  //   <section key={item.id}>
  //     <h3>{item.title}</h3>
  //   </section>
  // ));
  useEffect(() => {
    if (topRatedListStatus === "idle") {
      dispatch(fetchTopRatedData());
    }
  }, [topRatedListStatus, dispatch]);
  return (
    <>
      <h2>Top Rated</h2>
      {/* {renderedList} */}
    </>
  );
};
