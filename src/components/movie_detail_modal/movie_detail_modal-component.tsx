import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MovieActionTypes } from '../../store/movie/types';

interface MovieDetailModalProps {
    selectedMovieDetail: any;
    isModalShowing: boolean;
    closeModal: () => MovieActionTypes;
}

const MovieDetailModal: React.FC<MovieDetailModalProps> = (props) => {
    const { isModalShowing, closeModal, selectedMovieDetail } = props;
    const { Title, Plot, Director, Rated, Released } = selectedMovieDetail;

    return (
        <Modal show={isModalShowing} onHide={closeModal} className="movie_detail_modal">
            <Modal.Header closeButton>
                <Modal.Title id="modal-title">{Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Plot</h6>
                <p id="modal-plot">{Plot}</p>
                <br />
                <h6 id="modal-rated">Rated: {Rated}</h6>
                <h6 id="modal-directors">Director(s): {Director}</h6>
                <h6 id="modal-released">Released: {Released}</h6>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MovieDetailModal;
