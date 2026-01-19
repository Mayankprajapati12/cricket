import { combineReducers } from "@reduxjs/toolkit";
import { idReducer } from "./matchIDslice";
const rootReducer=combineReducers({
    id:idReducer,
})
export default rootReducer