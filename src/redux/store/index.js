import { configureStore } from "@reduxjs/toolkit";
import translateSlice from "../slice/translate";
const store = configureStore({
     reducer: {
     translate : translateSlice
     }
})


export default store