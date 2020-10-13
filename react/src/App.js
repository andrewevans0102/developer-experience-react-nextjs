import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/styles.scss";
import {
	EpisodesPage,
	Season2Page,
	ContactPage,
	HomePage,
	QuotesPage,
} from "./pages";
import { Header } from "./components";

export default function App() {
	return (
		<Router>
			<section>
				<Header />
				<Switch>
					<Route path="/episodes">
						<EpisodesPage />
					</Route>
					<Route path="/season2">
						<Season2Page />
					</Route>
					<Route path="/quotes">
						<QuotesPage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</section>
		</Router>
	);
}
