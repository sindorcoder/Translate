import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     source: "",
     target: "",
     text: "",

}


export const translateSlice = createSlice({
     name: "Translate",
     initialState,
     reducers: {
          sourceValue: (state, action) => {
               state.source = action.payload
          },
          targetValue: (state, action) => {
               state.target = action.payload
          },
          textValue: (state, action) => {
               state.text = action.payload
          }
     }
})
export const { sourceValue, targetValue, textValue } = translateSlice.actions
export default translateSlice.reducer