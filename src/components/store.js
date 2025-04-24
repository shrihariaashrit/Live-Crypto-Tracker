import { configureStore } from "@reduxjs/toolkit";
import slice1_reducer from "./slicer1";

const stores = configureStore(
    {
        reducer:{
            slice1 : slice1_reducer
        }
    }
)

export default stores;