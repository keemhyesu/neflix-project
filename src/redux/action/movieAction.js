import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    //데이터 도착 전 (로딩스피너 true)
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upComingApi,
      ]);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
        },
      });
    } catch (error) {
      //에러핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = { getMovies };
