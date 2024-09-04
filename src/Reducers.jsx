import { combineReducers } from "@reduxjs/toolkit";
import { idReducer } from "./matchIDslice";
import { scoreReducer } from "./matchIDslice";
const rootReducer=combineReducers({
    id:idReducer,
    score:scoreReducer
})
export default rootReducer