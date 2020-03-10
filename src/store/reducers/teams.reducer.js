import {SET_TEAMS} from "../actions/teams.actions";

export const initialState = [];

export const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAMS:
      return action.payload;
    default:
      return state;
  }
};
