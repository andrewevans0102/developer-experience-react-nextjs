import { EpisodesActionTypes } from '../actionTypes';

function Episodes(state = EpisodesActionTypes.initialEpisodesState, action) {
    switch (action.type) {
        case EpisodesActionTypes.GET_EPISODES:
            return Object.assign({}, state, {
                loading: true,
                episodes: [],
            });
        case EpisodesActionTypes.SET_EPISODES:
            return Object.assign({}, state, {
                ...state,
                loading: false,
                episodes: action.episodes,
            });
        case EpisodesActionTypes.EPISODES_ERROR:
            return Object.assign({}, state, {
                ...state,
                errors: [...state.errors, action.error],
            });
        default:
            return state;
    }
}

export default Episodes;
