import { createSlice } from "@reduxjs/toolkit";
const matchIDslice= createSlice({
    name:'matchid',
    initialState:{
        id:0,
        img1:0,
        img2:0
    },
    reducers:{
        idGen:(state,action)=>{state.id=action.payload.matchDataId
          state.img1=action.payload.imageIDS.team1IMG
          state.img2=action.payload.imageIDS.team2IMG
        }
    }
})
const scoreSlice=createSlice({
  name:'scorecard',
  initialState:{
    scoreData:0
  },
  reducers:{
    matchScores:(state,action)=>{state.scoreData=action.payload}
  }  
})
export const {idGen}=matchIDslice.actions
export const {matchScores}=scoreSlice.actions
export const idReducer=matchIDslice.reducer
export const scoreReducer=scoreSlice.reducer