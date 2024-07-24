import { configureStore } from "@reduxjs/toolkit";
import Weatherreducer from "./slices/WeatherdataSlice";

const store = configureStore({
    reducer:{
        weatherdata : Weatherreducer
    },
});

export default store;