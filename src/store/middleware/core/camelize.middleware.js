import { camelizeKeys } from "humps";

export const camelizeMiddleware = state => next => action => {
  if (action.type.includes("Set") && action.meta && action.meta.camelize) {
    const camelized = camelizeKeys(action.payload);

    next({ ...action, payload: camelized, camelize: null });
  } else {
    next(action);
  }
};
