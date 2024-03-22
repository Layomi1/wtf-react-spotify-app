import { Outlet, Navigate } from "react-router-dom";

const IsProtectedRoute = () => {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
export default IsProtectedRoute;
