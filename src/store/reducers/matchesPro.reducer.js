import {SET_MATCHES_PRO} from "../actions/matchesPro.actions";

export const initialState = [];

export const matchesProReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES_PRO:
      return action.payload;
    default:
      return state;
  }
};
