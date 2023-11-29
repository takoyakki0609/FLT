import { configureStore } from "@reduxjs/toolkit";
import letters from "redux/modules/letters";
import member from "redux/modules/member";

// const rootReducer = combineReducers({
//     letters,member
// })

// const store = createStore(rootReducer);

const store = configureStore({
    reducer: {
        letters,member
    }
})


export default store