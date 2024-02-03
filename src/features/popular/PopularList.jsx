import { useSelector, useDispatch } from "react-redux";
import { fetchPopularData, selectPopularList } from "./popularSlice";
import { useEffect } from "react";

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
    <section className="text-white" key={item.id}>
      <h3>{item.title}</h3>
    </section>
  ));

  return (
    <>
      <h1 className="text-white p-4 text-lg font-bold uppercase">
        Popular Movies
      </h1>
      {renderedList}
    </>
  );
};
