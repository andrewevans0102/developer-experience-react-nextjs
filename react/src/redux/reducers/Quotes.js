import { QuotesActionTypes } from '../actionTypes';

function QuotesReducer(state = QuotesActionTypes.initialQuotesState, action) {
    switch (action.type) {
        case QuotesActionTypes.GET_QUOTES:
            return Object.assign({}, state, {
                loading: true,
                quotes: [],
            });
        case QuotesActionTypes.SET_QUOTES:
            return Object.assign({}, state, {
                ...state,
                loading: false,
                quotes: action.quotes,
            });
        case QuotesActionTypes.QUOTES_ERROR:
            return Object.assign({}, state, {
                ...state,
                errors: [...state.errors, action.error],
            });
        default:
            return state;
    }
}

export default QuotesReducer;
