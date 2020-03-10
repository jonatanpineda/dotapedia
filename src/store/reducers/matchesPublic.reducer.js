import {SET_MATCHES_PUBLIC} from "../actions/matchesPublic.actions";

export const initialState = [];

export const matchesPublicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES_PUBLIC:
      return action.payload;
    default:
      return state;
  }
};
