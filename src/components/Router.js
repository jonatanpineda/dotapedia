import React from "react";
import {connect} from "react-redux";
import NotFound from "./NotFound";
import Matches from "./Matches";
import Distributions from "./Distributions";
import Home from "./Home";
import Heroes from "./Heroes";
import Teams from "./Teams";

const routesMap = {
	Heroes,
	Matches,
	Distributions,
	Home,
	Teams,
	NotFound
};

function Router({ page }) {
	const Component = routesMap[page];
	return <Component />
}

export default connect(({ page }) => ({page}))(Router);

