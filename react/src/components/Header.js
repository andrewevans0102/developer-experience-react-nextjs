import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="header">
			<span>
				<Link to="/">Home</Link>
			</span>
			<span>
				<Link to="/episodes">Episodes</Link>
			</span>
			<span>
				<Link to="/season2">Season 2</Link>
			</span>
			<span>
				<Link to="/quotes">Quotes</Link>
			</span>
		</nav>
	);
};

export default Header;
