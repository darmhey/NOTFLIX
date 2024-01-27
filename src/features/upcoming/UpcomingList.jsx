import { useSelector, useDispatch } from "react-redux";
import { fetchUpcomingData } from "./upcomingSlice";
import { useEffect } from "react";

export const UpcomingList = () => {
  //const upcomingList = useSelector((state) => state.upcoming);

  const dispatch = useDispatch();
  const upcomingListStatus = useSelector((state) => state.upcoming.status);

  useEffect(() => {
    if (upcomingListStatus === "idle") {
      dispatch(fetchUpcomingData());
    }
  }, [upcomingListStatus, dispatch]);

  // const renderedList = upcomingList.map((item) => (
  //   <section key={item.id}>
  //     <h3>{item.title}</h3>
  //   </section>
  // ));

  return (
    <>
      <h2 className="text-white">Upcoming</h2>
      {/* {renderedList} */}
    </>
  );
};
