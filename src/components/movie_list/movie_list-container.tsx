import { connect } from 'react-redux';
import MovieList from './movie_list-component';
import { AppState } from '../../store';

const mapStateToProps = (state: AppState) => ({
    movieList: state.movie.movieList,
});

export default connect(mapStateToProps, null)(MovieList);
