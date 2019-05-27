import { Movie, MovieDetail, SEARCH_MOVIE_FULFILLED, FETCH_MOVIE_DETAIL_FULFILLED, MovieActionTypes, CLOSE_MODAL, CLEAR_STATE } from './types'

// Type check action creators
export const searchMovieFulfilled = (results: Movie[]): MovieActionTypes => {
  return {
    type: SEARCH_MOVIE_FULFILLED,
    payload: results
  }
}

export const fetchMovieDetailFulfilled = (movieDetail: MovieDetail): MovieActionTypes => {
  return {
    type: FETCH_MOVIE_DETAIL_FULFILLED,
    payload: movieDetail
  }
}

export const closeModal = (): MovieActionTypes => {
  return {
    type: CLOSE_MODAL
  }
}

export const clearState = (): MovieActionTypes => {
  return {
    type: CLEAR_STATE
  }
}