import { createAction } from "@reduxjs/toolkit";
import { getNowPlayingMovies } from "api/TMDB/movie";
import * as constants from 'redux/constants';

const getNowPlayingSuccess = createAction(constants.GET_NOW_PLAYING_SUCCESS);

export default getNowPlaying = (page) => {
    return async (dispatch) => {
        try {
            const res = await getNowPlayingMovies(page);
            dispatch(getNowPlayingSuccess(res));

        } catch (err) {
            console.log(err);
        }
    }
}


