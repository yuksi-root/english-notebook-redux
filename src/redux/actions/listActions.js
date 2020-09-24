import * as actionTypes from "./actionTypes";

export function changeList(list) {
  return { type: actionTypes.CHANGE_LIST, payload: list };
}

export function getListsSuccess(lists){
    return{type: actionTypes.GET_LISTS_SUCCESS, payload: lists}
}

export function getLists() {
  return function (dispatch) {
    let url = "http://localhost:3000/lists";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getListsSuccess(result)));
  };
}
