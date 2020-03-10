export const MATCHES_PRO = "[Matches Pro]";

export const FETCH_MATCHES_PRO = `${MATCHES_PRO} Fetch`;
export const SET_MATCHES_PRO = `${MATCHES_PRO} Set`;

export const fetchMatchesPro = () => ({
  type: FETCH_MATCHES_PRO
});

export const setMatchesPro = ({ matchesPro }) => ({
  type: SET_MATCHES_PRO,
  payload: matchesPro,
  meta: { camelize: true }
});
