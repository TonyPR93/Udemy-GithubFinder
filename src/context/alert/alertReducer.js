//Changement de la state alert se fera ici
import { SET_ALERT, REMOVE_ALERT } from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
