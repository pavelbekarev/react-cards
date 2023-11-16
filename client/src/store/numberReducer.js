import {createSlice} from "@reduxjs/toolkit";


const numberSlice = createSlice({
  name: "number",
  initialState: {
    number: 0
  },
  reducers: {
    increase(state, action) {
      state.number += action.payload;
    },

    decrease(state, action) {
      state.number -= action.payload;
    }
  }
})

export const {increase, decrease} = numberSlice.actions;
export default numberSlice.reducer;