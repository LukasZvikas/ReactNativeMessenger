import axios from "axios";
import {
  GET_CITIES,
  PARTIAL_QUERY,
  CLEAR_SUGGESTIONS
} from "../reducers/types";

export const getCities = () => async dispatch => {
  const res = await axios.get("http://10.202.138.222:5000/getCities");

  console.log(res);
  dispatch({ type: GET_CITIES, payload: res.data });
};

export const getCityFromPartialQuery = query => async dispatch => {
  const res = await axios.post("http://10.202.138.222:5000/partialQuery", {
    partialQuery: query
  });

  console.log(res.data);
  dispatch({ type: PARTIAL_QUERY, payload: res.data });
};

export const clearSuggestions = () => {
  return { type: CLEAR_SUGGESTIONS };
};
