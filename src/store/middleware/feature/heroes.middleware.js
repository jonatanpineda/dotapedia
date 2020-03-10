import { FETCH_HEROES, HEROES, setHeroes } from "../../actions/heroes.actions";
import { API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setNetwork } from "../../actions/network.actions";
import { ODOTA_API_URL } from "../../../constants/urls";

export const HEROES_URL = `${ODOTA_API_URL}/heroStats`;

export const heroesMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_HEROES:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: HEROES_URL,
          feature: HEROES
        }),
        setNetwork({ feature: HEROES, loading: true })
      ]);
      break;

    case `${HEROES} ${API_SUCCESS}`:
      next([
        setHeroes({ heroes: action.payload }),
        setNetwork({ feature: HEROES, loading: false })
      ]);
      break;

    // no default
  }
};
