import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { getMovies, addMovie } from './middlewares/crud';
import moviesReducer from './reducers/movies';
// import constsReducer from './reducers/consts';

const reducer = combineReducers({ moviesReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(getMovies, addMovie)));
window.store = store

export default store;