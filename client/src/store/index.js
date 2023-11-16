import { configureStore, combineReducers } from "@reduxjs/toolkit";
import numberReducer from "./numberReducer";
import setReducer from "./setReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    number : numberReducer, 
    set    : setReducer
});


export const store = configureStore({
    reducer: rootReducer
});