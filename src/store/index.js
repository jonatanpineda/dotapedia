import { applyMiddleware, combineReducers, createStore } from "redux";
import { createRouter } from "@respond-framework/rudy";
import { composeWithDevTools } from "redux-devtools-extension";

import routes from "../routes";
import page from "./reducers/page.reducer";
import { heroesReducer } from "./reducers/heroes.reducer";
import { networkReducer } from "./reducers/network.reducer";
import { heroesMiddleware } from "./middleware/feature/heroes.middleware";
import { actionSplitterMiddleware } from "./middleware/core/actionSplitter.middleware";
import { apiMiddleware } from "./middleware/core/api.middleware";
import { pageMiddleware } from "./middleware/feature/page.middleware";
import { camelizeMiddleware } from "./middleware/core/camelize.middleware";
import { matchesProReducer } from "./reducers/matchesPro.reducer";
import { matchesPublicReducer } from "./reducers/matchesPublic.reducer";
import { matchesPublicMiddleware } from "./middleware/feature/matchesPublic.middleware";
import { matchesProMiddleware } from "./middleware/feature/matchesPro.middleware";

const { reducer, middleware, firstRoute } = createRouter(routes, {});

const rootReducer = combineReducers({
  heroes: heroesReducer,
  network: networkReducer,
  matchesPro: matchesProReducer,
  matchesPublic: matchesPublicReducer,
  page,
  location: reducer
});

const featureMiddleware = [
  pageMiddleware,
  heroesMiddleware,
  matchesPublicMiddleware,
  matchesProMiddleware
];

const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware,
  camelizeMiddleware
];

const middlewares = applyMiddleware(
  middleware,
  ...featureMiddleware,
  ...coreMiddleware
);
const enhancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, {}, enhancers);

export { firstRoute, store };
