import { actions } from "../actions";

const url = "http://localhost:3002/api";

export const getMovies =
  ({ dispatch }) =>
    (next) =>
      (action) => {
        if (action.type === "GET_MOVIES") {
          return fetch(`${url}/movies/getMovies`)
            .then((response) => response.json())
            .then((data) => {
              dispatch(actions.setMovies({ movies: data }));
            });
        }
        return next(action);
      };

export const addMovie =
  ({ dispatch }) =>
    (next) =>
      (action) => {
        console.log(action)
        if (action.type === "ADD_MOVIE") {
          fetch(`${url}/movies/addMovie`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ newMovie: action.payload }),
          })
            .then((response) => {
              dispatch(actions.setMessage({
                title: "Faild",
                status: '400',
              }
              ))
              console.log("eroor");
            })
            .then((data) => {
              dispatch(actions.setMessage({ title: "Success", status: '200' }))
            });
        }
        return next(action);
      };
