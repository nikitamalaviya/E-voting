import { combineReducers } from "redux";
import adminReducer from "../redux-saga/admin/Reducer"

let rootReducer = combineReducers({
    adminReducer,
})

export default rootReducer;