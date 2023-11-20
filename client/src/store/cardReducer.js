import { createSlice } from "@reduxjs/toolkit";

const cardReducer = createSlice({
    name: "card",
    initialState: {
        cards: []
    },
    reducers: {
        addCard(state, action) {
            state.cards.push(action.payload);
        },

        setCard(state, action) {
            state.cards = action.payload;
        }
    }
})


export const { addCard, setCard } = cardReducer.actions;
export default cardReducer.reducer;