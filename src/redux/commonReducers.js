import {createSlice} from '@reduxjs/toolkit'

const commonReducer = createSlice({
    name: 'loginState',
    initialState: false,
    reducers: {
        loginState: (state, action) => {
            return action.payload
        }
    }
})

export const {loginState} = commonReducer.actions;
export default commonReducer.reducer;