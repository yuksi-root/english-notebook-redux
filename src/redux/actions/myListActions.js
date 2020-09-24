import * as actionTypes from "./actionTypes"

export function addToMyList(myListItem){
    return{type:actionTypes.ADD_TO_MYLIST,payload:myListItem}
}

export function removeFromMyList(word){
    return{type:actionTypes.REMOVE_FROM_MYLIST,payload:word  }
}