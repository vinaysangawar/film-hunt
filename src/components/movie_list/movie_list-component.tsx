import React from 'react';
import { Row, CardGroup } from 'react-bootstrap';
import { Movie } from '../../store/movie/types';
import MovieListItem from '../movie_list_item/movie_list_item-container';

interface MovieListProps {
    movieList: Movie[];
}

const MovieList: React.FC<MovieListProps> = (props) => {
    const { movieList } = props;
    const movieItemRenderer = movieList.map((movie) => {
        return <MovieListItem movie={movie} />
    })

    return (
        <div>
            {(movieItemRenderer.length >= 1) ?
                <div className="movie_list">
                    <Row>
                        <p>Select a movie to view details!</p>
                    </Row>
                    <Row>
                        <CardGroup>
                            {movieItemRenderer}
                        </CardGroup>
                    </Row>
                </div> : ''
            }
        </div>
    );
}

export default MovieList;