
import { FC } from "react";
import { Navigate, Outlet, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const PrivateRoute: FC<RouteProps> = () => {
  const  isAuthenticated= useSelector((state: RootState) => state.userReducer.isLogin);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};