import { SET_HEROES } from "../actions/heroes.actions";

export const initialState = [];

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEROES:
      return action.payload;
    default:
      return state;
  }
};
