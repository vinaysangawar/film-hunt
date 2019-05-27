import { connect } from 'react-redux';
import MovieListItem from './movie_list_item-component';
import { thunkFetchMovieDetailByIMDBId } from './movie_list_item-thunks';

export default connect(null, { thunkFetchMovieDetailByIMDBId })(MovieListItem);
