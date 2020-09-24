import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveWordReducer(
  state = initialState.savedWord,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_WORD_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_WORD_SUCCESS:
      return action.payload;
    case actionTypes.DELETE_WORD_SUCCESS:
      return action.payload;    
    default:
      return state;
  }
}
