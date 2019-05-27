// Type check movie reducer state
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Season: string;
  Episode: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: any[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  seriesID: string;
  Type: string;
  Response: string;
}

export interface MovieState {
  movieList: Movie[],
  selectedMovieDetail: Object,
  isModalShowing: boolean
}

// Type check actions
export const SEARCH_MOVIE_FULFILLED = 'SEARCH_MOVIE_FULFILLED';
export const FETCH_MOVIE_DETAIL_FULFILLED = 'FETCH_MOVIE_DETAIL_FULFILLED';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CLEAR_STATE = 'CLEAR_STATE';

interface SearchMovieFulfilledAction {
  type: typeof SEARCH_MOVIE_FULFILLED
  payload: Movie[]
}

interface FetchMovieDetailFulfilledAction {
  type: typeof FETCH_MOVIE_DETAIL_FULFILLED
  payload: MovieDetail
}

interface CloseModalAction {
  type: typeof CLOSE_MODAL
}

interface ClearStateAction {
  type: typeof CLEAR_STATE
}

export type MovieActionTypes = SearchMovieFulfilledAction | FetchMovieDetailFulfilledAction | CloseModalAction | ClearStateAction