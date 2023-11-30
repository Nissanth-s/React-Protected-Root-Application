import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Fatch data from api using Thunk
const getgetUserListData = createAsyncThunk('api/getUserList', (requestParams = 1) => {
    return axios.get(process.env.REACT_APP_BACKEND_API_BASE_URL + '/api/users?page='+requestParams.page)
        .then((response) => {
            return response.data;
        })
});

const getgetUserListDataSlice = createSlice({
    name: 'getgetUserListData',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: {
        [getgetUserListData.pending]: (state, action) => {
            state.loading = true
        },
        [getgetUserListData.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        [getgetUserListData.rejected]: (state, action) => {
            state.loading = false
            state.error = 'Something went wrong, Please try after some time!'
        }
    }
});

export { getgetUserListData }

export default getgetUserListDataSlice.reducer;