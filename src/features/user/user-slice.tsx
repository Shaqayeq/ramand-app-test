import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface GridSliceState {
    username: string,
    password: string,
}

const initialState: GridSliceState = {
    username: "",
    password: "",
}

const changeUsername = (state: GridSliceState, action: PayloadAction<string>) => {
    state.username = action.payload;
}

const changePassword = (state: GridSliceState, action: PayloadAction<string>) => {
    state.password = action.payload;
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUsername,
        changePassword,
    },
});

export const {
    changeUsername: changeUsernameAction,
    changePassword: changePasswordAction,

} = UserSlice.actions;

export default UserSlice.reducer;