import { configureStore } from "@reduxjs/toolkit";
import GridReducer  from "./features/grid/grid-slice";
import UserReducer  from "./features/user/user-slice";

export const store = configureStore({
  reducer: {
    gridReducer: GridReducer,
    userReducer: UserReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch