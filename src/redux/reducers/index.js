import {combineReducers} from "redux"
import changeListReducer from "./changeListReducer"
import listReducer from "./listReducer"
import wordListReducer from "./wordListReducer"
import myListReducer from "./myListReducer"
import saveWordReducer from "./saveWordReducer"
const rootReducer = combineReducers({
    changeListReducer,
    listReducer,
    wordListReducer,
    myListReducer,
    saveWordReducer
})

export default rootReducer;