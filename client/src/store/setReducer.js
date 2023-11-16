import {createSlice} from "@reduxjs/toolkit";

const setSlice = createSlice({
    name: "set",
    initialState: {
        sets: []
    },
    reducers: {
        addSet(state, action) {
            state.sets.push(action.payload);
        },

        setSets(state, action) {
            state.sets = action.payload;
        }
    }
})

export const {addSet, setSets} = setSlice.actions;
export default setSlice.reducer;