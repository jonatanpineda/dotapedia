import { fetchHeroes } from "../../actions/heroes.actions";
import { fetchMatchesPro } from "../../actions/matchesPro.actions";
import { fetchMatchesPublic } from "../../actions/matchesPublic.actions";
import { fetchTeams } from "../../actions/teams.actions";

export const pageMiddleware = store => next => action => {
  next(action);

  switch (action.type) {
    case "HEROES": {
      if (store.getState().heroes.length === 0) {
        next(fetchHeroes());
      }
      break;
    }

    case "TEAMS": {
      if (store.getState().teams.length === 0) {
        next(fetchTeams());
      }
      break;
    }

    case "MATCHES": {
      const state = store.getState();
      const matchesPro = state.matchesPro;
      const matchesPublic = state.matchesPublic;

      if (action.params.value === "pro" && matchesPro.length === 0) {
        next(fetchMatchesPro());
      }

      if (action.params.value === "highMmr" && matchesPublic.length === 0) {
        next(fetchMatchesPublic());
      }

      break;
    }

    // no default
  }
};
