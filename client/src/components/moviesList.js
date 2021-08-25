import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/actions";
import MovieItem from "./movieItem";
import MovieInModal from "./movieInModal";
import Message from "./message";

function MoviesList() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.moviesReducer);
  const [currentMovie, setCurrentMovie] = useState();
  const [currentCategory, setCurrentCategory] = useState("no filter");
  const { categories } = useSelector((state) => state.moviesReducer);
  const [isNewMovie, setIsNewMovie] = useState(false);

  useEffect(() => {
    dispatch(actions.getMovies());
  }, [dispatch]);

  const moviesToShow = movies.filter((movie) => currentCategory === 'no filter' || movie.category === currentCategory);
  return (
    <>
      <Container>
      <Message />
        <h1 className="my-5">My Movies</h1>
        <Dropdown onSelect={(key, e) => setCurrentCategory(e.target.innerText)}>
          <Dropdown.Toggle variant="secondary">
            {currentCategory}
          </Dropdown.Toggle>
          <Button variant="secondary" onClick={() => setIsNewMovie(true)}>add new movie</Button>
          <Dropdown.Menu>
            <Dropdown.Item key="-1">no filter</Dropdown.Item>
            {categories.map((category, key) => (
              <Dropdown.Item key={key}>{category}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Container>
          <Row>
          {moviesToShow.map((movie, key) => {
            return (
              <Col xs={6} md={6}>
                <MovieItem
                  movie={movie}
                  key={key}
                  setCurrentMovie={setCurrentMovie}
                />
              </Col>
            );
          })}
          </Row>
        </Container>
        <MovieInModal
          currentMovie={currentMovie}
          setCurrentMovie={setCurrentMovie}
          isNewMovie={isNewMovie}
          handleClose={setIsNewMovie}
        />
      </Container>
      </>
  );
}

export default MoviesList;


