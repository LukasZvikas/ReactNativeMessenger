import { GET_CITIES } from "./types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_CITIES:
      return { ...state, citiesArray: action.payload };
    default:
      return state;
  }
}
