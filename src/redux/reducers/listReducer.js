import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function listReducer(
  state = initialState.lists,action
) {
  switch (action.type) {
    case actionTypes.GET_LISTS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
