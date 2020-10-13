import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EpisodesActions } from '../redux/actions';
import '../styles/styles.scss';
// import episodes from '../config/episodes';

// const episodes = [
//     { key: 'first', value: 'something here' },
//     { key: 'second', value: 'something there' },
// ];

function EpisodesPage(props) {
    const dispatch = useDispatch();

    // first read in the values from the store through a selector here
    const episodes = useSelector((state) => state.Episodes.episodes);

    useEffect(() => {
        // if the value is empty, send a dispatch action to the store to load the episodes correctly
        if (episodes.length === 0) {
            dispatch(EpisodesActions.retrieveEpisodes());
        }
    });

    return (
        <section className="episodes">
            <h1>Episodes</h1>
            {episodes !== null &&
                episodes.map((episodesItem) => (
                    <article key={episodesItem.key}>
                        <h2>
                            <a href={episodesItem.link}>{episodesItem.key}</a>
                        </h2>
                        <p>{episodesItem.value}</p>
                    </article>
                ))}
            <div className="episodes__source">
                <p>
                    original content copied from
                    <a href="https://www.vulture.com/tv/the-mandalorian/">
                        here
                    </a>
                </p>
            </div>
        </section>
    );
}

export default EpisodesPage;
