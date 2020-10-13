import React from 'react';
import '../styles/styles.scss';

function HomePage(props) {
    return (
        <section className="home">
            <img src={require('./HomePage.jpg')} alt="Home Page" />
            <p>
                photo can originally be found{' '}
                <a href="https://starwars.fandom.com/wiki/The_Mandalorian">
                    here
                </a>
            </p>
        </section>
    );
}

export default HomePage;
