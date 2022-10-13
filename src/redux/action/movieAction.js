import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = await api.get(
      `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    // let url = `/tv/popular?api_key=<<api_key>>&language=en-US&page=1`;
    // let response = await fetch(url);
    // let data = await response.json();
  };
}

export const movieAction = { getMovies };
