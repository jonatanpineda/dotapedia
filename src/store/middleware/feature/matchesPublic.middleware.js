import { API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setNetwork } from "../../actions/network.actions";
import { ODOTA_API_URL } from "../../../constants/urls";
import {
  FETCH_MATCHES_PUBLIC,
  MATCHES_PUBLIC,
  setMatchesPublic
} from "../../actions/matchesPublic.actions";

export const MATCHES_PUBLIC_URL = `${ODOTA_API_URL}/publicMatches?mmr_descending=1`;

export const matchesPublicMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_MATCHES_PUBLIC:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: MATCHES_PUBLIC_URL,
          feature: MATCHES_PUBLIC
        }),
        setNetwork({ feature: MATCHES_PUBLIC, loading: true })
      ]);
      break;

    case `${MATCHES_PUBLIC} ${API_SUCCESS}`:
      next([
        setMatchesPublic({ matchesPublic: action.payload }),
        setNetwork({ feature: MATCHES_PUBLIC, loading: false })
      ]);
      break;

    // no default
  }
};
