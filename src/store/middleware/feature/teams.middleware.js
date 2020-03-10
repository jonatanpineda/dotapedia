import { API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setNetwork } from "../../actions/network.actions";
import { ODOTA_API_URL } from "../../../constants/urls";
import {FETCH_TEAMS, setTeams, TEAMS} from "../../actions/teams.actions";

export const TEAMS_URL = `${ODOTA_API_URL}/teams?`;

export const teamsMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_TEAMS:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: TEAMS_URL,
          feature: TEAMS
        }),
        setNetwork({ feature: TEAMS, loading: true })
      ]);
      break;

    case `${TEAMS} ${API_SUCCESS}`:
      next([
        setTeams({ teams: action.payload }),
        setNetwork({ feature: TEAMS, loading: false })
      ]);
      break;

    // no default
  }
};
