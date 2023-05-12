import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface GridSliceState {
    username: string,
    password: string,
    isLogin: boolean,
}

const initialState: GridSliceState = {
    username: "",
    password: "",
    isLogin: false,
}

const changeUsername = (state: GridSliceState, action: PayloadAction<string>) => {
    state.username = action.payload;
}

const changePassword = (state: GridSliceState, action: PayloadAction<string>) => {
    state.password = action.payload;
}

const setIsLoginUser = (state: GridSliceState, action: PayloadAction<boolean>) => {
    state.isLogin = action.payload;
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUsername,
        changePassword,
        setIsLoginUser,
    },
});

export const {
    changeUsername: changeUsernameAction,
    changePassword: changePasswordAction,
    setIsLoginUser: setIsLoginUserAction,

} = UserSlice.actions;

export default UserSlice.reducer;