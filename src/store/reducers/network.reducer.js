import { SET_NETWORK } from "../actions/network.actions";

const initialState = {};

export const networkReducer = (state = initialState, action) => {
  switch (true) {
    case action.type.includes(SET_NETWORK):
      const { feature, loading } = action.payload;
      return { ...state, [feature]: loading };

    default:
      return state;
  }
};
