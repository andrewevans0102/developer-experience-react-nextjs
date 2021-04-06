import React from "react";
import episodes from "./config/episodes";
import Header from "./components/Header";

function EpisodesPage({ localEpisodes }) {
  return (
    <>
      <section className="episodes">
        <Header />
        <h1>Episodes</h1>
        {localEpisodes !== null &&
          localEpisodes.map((episodesItem) => (
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
            <a href="https://www.vulture.com/tv/the-mandalorian/">here</a>
          </p>
        </div>
      </section>
    </>
  );
}
export default EpisodesPage;
export async function getStaticProps(context) {
  const localEpisodes = episodes;
  return {
    props: { localEpisodes }, // will be passed to the page component as props
  };
}
