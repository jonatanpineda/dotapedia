import { API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setNetwork } from "../../actions/network.actions";
import { ODOTA_API_URL } from "../../../constants/urls";
import {
  FETCH_MATCHES_PRO,
  MATCHES_PRO,
  setMatchesPro
} from "../../actions/matchesPro.actions";

export const MATCHES_PRO_URL = `${ODOTA_API_URL}/proMatches?`;

export const matchesProMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_MATCHES_PRO:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: MATCHES_PRO_URL,
          feature: MATCHES_PRO
        }),
        setNetwork({ feature: MATCHES_PRO, loading: true })
      ]);
      break;

    case `${MATCHES_PRO} ${API_SUCCESS}`:
      next([
        setMatchesPro({ matchesPro: action.payload }),
        setNetwork({ feature: MATCHES_PRO, loading: false })
      ]);
      break;

    // no default
  }
};
