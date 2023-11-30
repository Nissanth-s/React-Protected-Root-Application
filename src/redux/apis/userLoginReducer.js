import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Fatch data from api using Thunk
const userLoginData = createAsyncThunk('api/getUserList', (requestParams) => {
    return axios.request({
        method: 'POST',
        url: process.env.REACT_APP_BACKEND_API_BASE_URL + '/api/login',
        data: requestParams
    })
        .then((response) => {
            return response.data;
        })
});

const userLoginDataSlice = createSlice({
    name: 'userLoginData',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: {
        [userLoginData.pending]: (state, action) => {
            state.loading = true
        },
        [userLoginData.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        [userLoginData.rejected]: (state, action) => {
            state.loading = false
            state.error = 'Something went wrong, Please try after some time!'
        }
    }
});

export { userLoginData }

export default userLoginDataSlice.reducer;