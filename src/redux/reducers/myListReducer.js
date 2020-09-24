import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import alertify from "alertifyjs";

export default function myListReducer(state = initialState.myList, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_MYLIST:
      var addedItem = state.find((m) => m.word.id === action.payload.word.id);
      if (addedItem) {
        var newState = state.map((myListItem) => {
          if (myListItem.word.id === action.payload.word.id) {
            alertify.error(action.payload.word.engWordName + " already add myList", 1);
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return myListItem;
        });
        return newState;
      } else {
        alertify.success(action.payload.word.engWordName + " Added to MyList", 1)
        return [...state, { ...action.payload }]; //state in kopyasını alıp payload ı ekle
      }
      case actionTypes.REMOVE_FROM_MYLIST:
        const newState2 = state.filter(myListItem=>myListItem.word.id!==action.payload.id)
        return newState2;
    default:
      return state;
  }
}
