import { createSlice, getDefaultMiddleware } from "@reduxjs/toolkit"

const initialState = {
    user: null, 
    token: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        }
    }
})


export const setLogin = authSlice.actions;
export default authSlice.reducer;