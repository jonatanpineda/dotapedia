import { fetchHeroes } from "../../actions/heroes.actions";

export const pageMiddleware = state => next => action => {
  next(action);

  switch (action.type) {
    case "HEROES": {
      if (state.getState().heroes.length === 0) {
        next(fetchHeroes());
      }
      break;
    }

    // no default
  }
};
