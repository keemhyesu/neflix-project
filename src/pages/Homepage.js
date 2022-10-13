import React, { useEffect } from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch } from "react-redux"; //action을 호출하려면 dispatch가 필요!!!!
const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return <div>Homepage</div>;
};

export default Homepage;
