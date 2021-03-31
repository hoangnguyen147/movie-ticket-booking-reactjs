import { combineReducers } from "redux";
import nowPlaying from './movie/nowPlaying'

const reducer = combineReducers({
    nowPlaying,
});

export default reducer;
