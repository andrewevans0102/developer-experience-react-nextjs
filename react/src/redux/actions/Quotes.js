import { QuotesActionTypes } from '../actionTypes';
import quotes from '../../config/quotes';

export function getQuotes() {
    return { type: QuotesActionTypes.GET_QUOTES };
}

export function setQuotes(quotes) {
    return { type: QuotesActionTypes.SET_QUOTES, quotes };
}

export function quotesError() {
    return { type: QuotesActionTypes.GET_QUOTES };
}

// here we introduce a side effect
// best practice is to have these alongside actions rather than an "effects" folder
export function retrieveQuotes() {
    return function (dispatch) {
        // first call get quotes to clear values
        dispatch(getQuotes());
        // return a dispatch of set while pulling in the quotes information (this is considered a "side effect")
        return dispatch(setQuotes(quotes));
    };
}
