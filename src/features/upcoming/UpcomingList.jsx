import { useSelector, useDispatch } from "react-redux";
import { fetchUpcomingData, selectUpcoming } from "./upcomingSlice";
import { useEffect } from "react";

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
    <section className="text-white" key={item.id}>
      <h3>{item.title}</h3>
    </section>
  ));

  return (
    <>
      <h2 className="text-white p-4 text-lg font-bold uppercase">Upcoming</h2>
      {renderedList}
    </>
  );
};
