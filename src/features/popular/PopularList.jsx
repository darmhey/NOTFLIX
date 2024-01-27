import { useSelector, useDispatch } from "react-redux";
import { fetchPopularData } from "./popularSlice";
import { useEffect } from "react";

export const PopularList = () => {
  //const popularList = useSelector(selectPopularList); selectPopularList,
  const dispatch = useDispatch();

  const popularListStatus = useSelector((state) => state.popular.status);

  useEffect(() => {
    if (popularListStatus === "idle") {
      dispatch(fetchPopularData());
    }
  }, [popularListStatus, dispatch]);

  // const renderedList = popularList.posts.map((item) => (
  //   <section key={item.id}>
  //     <h3>{item.title}</h3>
  //   </section>
  // ));

  return (
    <>
      <h2 className="text-white">Popular</h2>
      {/* {renderedList} */}
    </>
  );
};
