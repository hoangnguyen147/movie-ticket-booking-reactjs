import { handleActions } from "redux-actions";
import * as actions from "redux/constants";

const initialState = {
    movies: [],
};

const nowPlaying = handleActions(
    {
        [actions.GET_NOW_PLAYING_SUCCESS]: (state, action) => {
            return {
                ...state,
                movies: action.payload,
            }
        }
    },
    initialState
)

export default nowPlaying;

