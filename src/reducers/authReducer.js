import { SIGN_IN } from "./types";

export default function(state = [], action) {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    default:
      return state;
  }
}
