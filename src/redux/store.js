import { configureStore } from "@reduxjs/toolkit";
import getgetUserListDataSlice from "./apis/getUserListReducer"
import userLoginDataSlice from "./apis/userLoginReducer"

const store = configureStore({
    reducer: {
        getgetUserListDataSlice,
        userLoginDataSlice
    }
})

export default store;