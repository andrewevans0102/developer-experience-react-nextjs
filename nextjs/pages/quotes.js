import React from "react";
import quotes from "./config/quotes";
import Header from "./components/Header";

function QuotesPage({ localQuotes }) {
  return (
    <section className="quotes">
      <Header />
      <h1>Quotes</h1>
      <ul>
        {localQuotes !== null &&
          localQuotes.map((quotesItem) => (
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
export async function getStaticProps(context) {
  const localQuotes = quotes;
  return {
    props: { localQuotes }, // will be passed to the page component as props
  };
}
