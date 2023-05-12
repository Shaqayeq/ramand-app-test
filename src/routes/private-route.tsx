
import { FC } from "react";
import { Navigate, Outlet, RouteProps } from "react-router-dom";
import { isAuthenticated } from "../services/auth-service";

export const PrivateRoute: FC<RouteProps> = () => {
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};