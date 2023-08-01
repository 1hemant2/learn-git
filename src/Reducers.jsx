import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    c: 0,
};
export const customReducer = createReducer(initialState, {
    increament: (state) => {
        state.c += 1;
    },
    increamentByValue: (state, action) => {
        console.log(action.payload);
        state.c += action.payload;
    },
    decreament: (state) => {
        state.c -= 1;
    }
})
