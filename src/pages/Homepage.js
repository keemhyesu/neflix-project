import React, { useEffect } from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Homepage = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  //로딩이 true면 로딩스피너를 보여주고 false면 데이터를 보여준다
  //true: 데이터 도착 전 false: 데이터 도착 후 or 에러 났을 때
  //데이터 도착 전/후를 알 수 있는 곳 => movieAction.js
  if (loading) {
    return <ClipLoader color={"#fffff"} loading={loading} size={150} />;
  }
  return (
    <div>
      {<Banner movie={popularMovies.results[0]} />}
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Homepage;
