import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function ProtectedRoute({ requireManager = false }) {
  const { token, user } = useAuth();

  if (!token) return <Navigate to="/" />;

  if (requireManager && (!user || !user.is_manager)) {
    return <Navigate to="/resident/dashboard" />;
  }
  return <Outlet />;
}
