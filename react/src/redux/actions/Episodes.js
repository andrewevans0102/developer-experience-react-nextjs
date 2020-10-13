import { EpisodesActionTypes } from '../actionTypes';
import episodes from '../../config/episodes';

export function getEpisodes() {
    return { type: EpisodesActionTypes.GET_EPISODES };
}

export function setEpisodes(episodes) {
    return { type: EpisodesActionTypes.SET_EPISODES, episodes };
}

export function episodesError() {
    return { type: EpisodesActionTypes.GET_EPISODES };
}

// here we introduce a side effect
// best practice is to have these alongside actions rather than an "effects" folder
export function retrieveEpisodes() {
    return function (dispatch) {
        // first call get about to clear values
        dispatch(getEpisodes());
        // return a dispatch of set while pulling in the about information (this is considered a "side effect")
        return dispatch(setEpisodes(episodes));
    };
}
