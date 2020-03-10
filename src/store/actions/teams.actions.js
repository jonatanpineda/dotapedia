export const TEAMS = "[Teams]";

export const FETCH_TEAMS = `${TEAMS} Fetch`;
export const SET_TEAMS = `${TEAMS} Set`;

export const fetchTeams = () => ({
  type: FETCH_TEAMS
});

export const setTeams = ({ teams }) => ({
  type: SET_TEAMS,
  payload: teams,
  meta: { camelize: true }
});
