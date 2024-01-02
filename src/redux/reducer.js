import { createReducer } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


export const firstReducer = createSlice({
    name: "task",
    initialState:{
        firsts:[],
        qty:0,
    },
    reducers: {
        display: (state, action) => {
            const item = action.payload
            state.firsts = [...state.firsts, item];
            state.qty +=1;
        }
    }
})

export const { display } = firstReducer.actions;
export default firstReducer.reducer;


// export const firstReducer = createReducer(
//     {
//         first:[],
//         qty:0,
//     },
//     (builder) => {
//         builder.addCase('Display', (state, action) => {
//             const item = action.payload;
//             state.first = [...state.first, item];
//             state.qty += 1;
//         });
//     }
// );