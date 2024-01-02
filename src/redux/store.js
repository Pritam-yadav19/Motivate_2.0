import {configureStore} from "@reduxjs/toolkit";
import firstReducer from "./reducer";

const store = configureStore({      //**{}are for objects */
    reducer:{                       //reducer is a key
        task: firstReducer,
    },
});


export default store;
