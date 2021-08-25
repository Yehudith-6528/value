import styled from "styled-components";
import { Image } from "react-bootstrap";

function MovieItem(props) {
  const { movie, setCurrentMovie } = props;
  if (movie)
    return (
      <div className="position-relative w-100" onClick={() => setCurrentMovie(movie)}>
            <Image src={movie.image} alt={movie.id} thumbnail />    <Title>{movie.title}</Title>
      </div>
    );
}
export default MovieItem;

const Title = styled.h5`
  position: absolute;
  top: 50%;
  text-align: center;
  width: 100%;
  `;
