import {  Modal } from "react-bootstrap";
import NewMovie from "./newMovie";

function MovieInModal(props) {
  const { currentMovie, handleClose, isNewMovie, setCurrentMovie } = props;
 
  return (
    <Modal show={currentMovie || isNewMovie} onHide={() => {
      setCurrentMovie()
      handleClose(false)
    }}>
      <Modal.Header closeButton>
      </Modal.Header>
      {isNewMovie ? (
          <NewMovie handleClose={handleClose}  setCurrentMovie={setCurrentMovie}/>
      ) : (
          <>
            <img
              src={currentMovie?.image}
              alt={currentMovie?.id}
              className="mw-100"
            />
            <p>Category: {currentMovie?.category}</p>
            <p>Rating: {currentMovie?.rating}</p>
          </>
        )}
    </Modal>
  );
}

export default MovieInModal;
