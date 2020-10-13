import React from 'react';
import ReactPlayer from 'react-player/youtube';
import '../styles/styles.scss';

function Season2Page(props) {
    return (
        <section className="season2">
            <h1>Season2</h1>
            <div className="season2__video">
                <ReactPlayer url="https://youtu.be/eW7Twd85m2g" />
            </div>
        </section>
    );
}

export default Season2Page;
