import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import api from "../redux/api";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  let { id } = useParams();

  const getMovieDetail = async () => {
    const movieDetailApi = api.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    let [movieDetail] = await Promise.all([movieDetailApi]);
    setMovie(movieDetail.data);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetail;
