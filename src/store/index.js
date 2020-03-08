import { applyMiddleware, combineReducers, createStore } from "redux";
import { createRouter } from "@respond-framework/rudy";
import { composeWithDevTools } from "redux-devtools-extension";

import routes from "../routes";
import page from "./reducers/page.reducer";

const { reducer, middleware, firstRoute } = createRouter(routes, {});

const rootReducer = combineReducers({
  page,
  location: reducer
});

const middlewares = applyMiddleware(middleware);
const enhancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, {}, enhancers);

export { firstRoute, store };
