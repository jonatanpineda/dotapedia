export const HEROES = '[Heroes]';

export const FETCH_HEROES = `${HEROES} Fetch`;
export const SET_HEROES = `${HEROES} Set`;

export const fetchHeroes = () => ({
  type: FETCH_HEROES
});

export const setHeroes = ({heroes}) => ({
  type: SET_HEROES,
  payload: heroes,
  meta: { camelize: true }
});