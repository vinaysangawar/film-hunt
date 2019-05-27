import { connect } from 'react-redux';
import MovieDetailModal from './movie_detail_modal-component';
import { AppState } from '../../store';
import { closeModal } from '../../store/movie/actions';

const mapStateToProps = (state: AppState) => ({
    selectedMovieDetail: state.movie.selectedMovieDetail,
    isModalShowing: state.movie.isModalShowing
});

export default connect(mapStateToProps, { closeModal })(MovieDetailModal);
