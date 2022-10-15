import React, { useEffect } from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";

const Homepage = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
    </div>
  );
};

export default Homepage;
