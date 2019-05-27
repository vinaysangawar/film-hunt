import {
  MovieState,
  MovieActionTypes,
  SEARCH_MOVIE_FULFILLED,
  FETCH_MOVIE_DETAIL_FULFILLED,
  CLOSE_MODAL,
  CLEAR_STATE
} from './types'

const initialState: MovieState = {
  movieList: [],
  selectedMovieDetail: {},
  isModalShowing: false
}

export function movieReducer(
  state = initialState,
  action: MovieActionTypes
): MovieState {
  switch (action.type) {
    case SEARCH_MOVIE_FULFILLED:
      return {
        movieList: action.payload,
        selectedMovieDetail: {},
        isModalShowing: false
      };
    case FETCH_MOVIE_DETAIL_FULFILLED:
      return { ...state, selectedMovieDetail: action.payload, isModalShowing: true };
    case CLOSE_MODAL:
      return { ...state, selectedMovieDetail: {}, isModalShowing: false };
    case CLEAR_STATE:
      return { ...state, movieList: [], selectedMovieDetail: {}, isModalShowing: false };
    default:
      return state;
  }
}