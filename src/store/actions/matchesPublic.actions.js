export const MATCHES_PUBLIC = "[Matches Public]";

export const FETCH_MATCHES_PUBLIC = `${MATCHES_PUBLIC} Fetch`;
export const SET_MATCHES_PUBLIC = `${MATCHES_PUBLIC} Set`;

export const fetchMatchesPublic = () => ({
  type: FETCH_MATCHES_PUBLIC
});

export const setMatchesPublic = ({ matchesPublic }) => ({
  type: SET_MATCHES_PUBLIC,
  payload: matchesPublic,
  meta: { camelize: true }
});
