export const SET_NETWORK = "SET_NETWORK";

export const setNetwork = ({ feature, loading }) => ({
  type: `${feature} ${SET_NETWORK}`,
  payload: {
    feature,
    loading
  }
});
