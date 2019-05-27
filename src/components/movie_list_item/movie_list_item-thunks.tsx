import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { fetchMovieDetailFulfilled } from "../../store/movie/actions";
import { AppState } from "../../store";
import axios from "axios";
import { toast } from "react-toastify";

// MovieListItem BL handled here via thunk middleware

export const thunkFetchMovieDetailByIMDBId = (
    imdbId: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    try {
        const movieDetailResp = await axios.get(`/searchMovieByIMDBId?imdbId=${imdbId}`);
        if (movieDetailResp.data.Response === 'False') {
            toast.error("Movie details not available");
        } else {
            console.log(movieDetailResp.data);
            dispatch(fetchMovieDetailFulfilled(movieDetailResp.data))
        }
    } catch (error) {
        toast.error("Whoops, something went wrong :( Please try again later.");
        console.error(error);
    }
};
