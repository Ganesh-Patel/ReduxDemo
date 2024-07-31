import { createSlice } from "@reduxjs/toolkit";


let initialvalues = {
    counter: 0,
  };
const counterSlice=createSlice({
    name:"counter Slice",
    initialState:initialvalues,
    reducers:{
        increaseCounter: (state, action) => {
            state.counter += action.payload.value;
          },
          decreaseCounter: (state, action) => {
            state.counter -= action.payload.value;
          },
    }
})


export default counterSlice.reducer;//here we need to export reducer here from counterSlice 
export const { increaseCounter, decreaseCounter } = counterSlice.actions;//here we need to import both the reducers from this 