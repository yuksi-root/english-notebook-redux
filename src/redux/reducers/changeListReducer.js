import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeCategoryReducer(
  state = initialState.currentList,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
      return action.payload;

    default:
      return state;
  }
}
