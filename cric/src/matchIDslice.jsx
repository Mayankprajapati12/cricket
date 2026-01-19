import { createSlice } from "@reduxjs/toolkit";
const matchIDslice= createSlice({
    name:'matchid',
    initialState:{
        id:0
    },
    reducers:{
        idGen:(state,action)=>{
          state.id=action.payload
        }
    }
})
export const {idGen}=matchIDslice.actions
export const idReducer=matchIDslice.reducer