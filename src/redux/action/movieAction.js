import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    const topRatedApi = api.get(
      `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const upComingApi = api.get(`/tv/latest?api_key=${API_KEY}&language=en-US`);

    // let url = `/tv/popular?api_key=<<api_key>>&language=en-US&page=1`;
    // let response = await fetch(url);
    // let data = await response.json();
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
  };
}

export const movieAction = { getMovies };
