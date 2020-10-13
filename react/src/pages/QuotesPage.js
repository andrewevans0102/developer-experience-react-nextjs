import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { QuotesActions } from '../redux/actions';
// import quotes from '../config/quotes';

// const quotes = ['first quote', 'second quote'];

function QuotesPage(props) {
    const dispatch = useDispatch();

    // first read in the values from the store through a selector here
    const quotes = useSelector((state) => state.Quotes.quotes);

    useEffect(() => {
        // if the value is empty, send a dispatch action to the store to load the episodes correctly
        if (quotes.length === 0) {
            dispatch(QuotesActions.retrieveQuotes());
        }
    });

    return (
        <section className="quotes">
            <h1>Quotes</h1>
            <ul>
                {quotes !== null &&
                    quotes.map((quotesItem) => (
                        <li key={quotesItem}>
                            <q>{quotesItem}</q>
                        </li>
                    ))}
            </ul>
            <div className="quotes__source">
                <p>
                    original content copied from
                    <a href="https://www.magicalquote.com/best-mandalorian-quotes/">
                        here
                    </a>
                </p>
            </div>
        </section>
    );
}

export default QuotesPage;
