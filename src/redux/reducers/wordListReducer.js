import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function wordListReducer(
  state = initialState.words,action
) {
  switch (action.type) {
    case actionTypes.GET_WORDS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
