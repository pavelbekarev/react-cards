import { configureStore, combineReducers } from "@reduxjs/toolkit";
import numberReducer from "./numberReducer";
import setReducer from "./setReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import cardReducer from "./cardReducer";


const rootReducer = combineReducers({
    number : numberReducer, 
    set: setReducer,
    card: cardReducer
});


export const store = configureStore({
    reducer: rootReducer
});