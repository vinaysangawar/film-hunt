import React from 'react';
import { Card } from 'react-bootstrap';
import { Movie } from '../../store/movie/types';
import defaultImage from '../../media/poster-not-found.png';

interface MovieProps {
    movie: Movie;
    thunkFetchMovieDetailByIMDBId: any;
}

const MovieListItem: React.FC<MovieProps> = ({ movie, thunkFetchMovieDetailByIMDBId }) => {
    const { Poster, Year, Title, imdbID } = movie;
    let posterImgSource = (Poster === 'N/A') ? defaultImage : Poster;

    const handleCardClick = () => {
        thunkFetchMovieDetailByIMDBId(imdbID);
    };

    return (
        <Card className="movie_list_item" onClick={handleCardClick} >
            <Card.Img variant="top" src={posterImgSource} />
            <Card.Body className="small text-center d-flex flex-column mt-auto">
                <Card.Text className="d-flex flex-column mt-auto">
                    {Title}
                </Card.Text>
                <Card.Text className="text-muted d-flex flex-column mt-auto">
                    {Year}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MovieListItem;
