import { combineReducers } from "redux"

import userReducer from "./userReducer";

const RootReducer = combineReducers({
    userDetails: userReducer
});
export default RootReducer;