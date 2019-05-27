import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MovieDetailModal from '../movie_detail_modal-component'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        selectedMovieDetail: {
            Title: 'The Matrix',
            Year: '1999',
            Rated: 'R',
            Released: '31 Mar 1999',
            Runtime: '136 min',
            Genre: 'Action, Sci-Fi',
            Director: 'Lana Wachowski, Lilly Wachowski',
            Writer: 'Lilly Wachowski, Lana Wachowski',
            Actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
            Plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
            Language: 'English',
            Country: 'USA',
            Awards: 'Won 4 Oscars. Another 34 wins & 48 nominations.',
            Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
            Ratings: [
                {
                    Source: 'Internet Movie Database',
                    Value: '8.7/10'
                },
                {
                    Source: 'Rotten Tomatoes',
                    Value: '88%'
                },
                {
                    Source: 'Metacritic',
                    Value: '73/100'
                }
            ],
            Metascore: '73',
            imdbRating: '8.7',
            imdbVotes: '1,500,156',
            imdbID: 'tt0133093',
            Type: 'movie',
            DVD: '21 Sep 1999',
            BoxOffice: 'N/A',
            Production: 'Warner Bros. Pictures',
            Website: 'http://www.whatisthematrix.com',
            Response: 'True'
        },
        isModalShowing: true,
        closeModal: jest.fn()
    }

    const enzymeWrapper = shallow(<MovieDetailModal {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('MovieDetailModal', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            console.log(enzymeWrapper);
            expect(enzymeWrapper.find('#modal-title').text()).toBe('The Matrix');
            expect(enzymeWrapper.find('#modal-plot').text()).toContain('A computer hacker learns from mysterious rebels');
            expect(enzymeWrapper.find('#modal-rated').text()).toBe('Rated: R');
            expect(enzymeWrapper.find('#modal-directors').text()).toBe('Director(s): Lana Wachowski, Lilly Wachowski');
            expect(enzymeWrapper.find('#modal-released').text()).toBe('Released: 31 Mar 1999');
        })
    })
})