import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { searchMovieFulfilled, clearState } from "../../store/movie/actions";
import { AppState } from "../../store";
import axios from "axios";
import { toast } from "react-toastify";

// SearchBar BL handled here via thunk middleware

export const thunkSearchMovie = (
    searchString: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    try {
        const searchResults = await axios.get(`/searchMovie?movie=${searchString}`);
        if (searchResults.data.length >= 1) {
            dispatch(searchMovieFulfilled(searchResults.data))
        } else {
            toast.warn("No results found!");
            dispatch(clearState());
        }
    } catch (error) {
        toast.error("Whoops, something went wrong :( Please try again later.");
        console.error(error);
    }
};
