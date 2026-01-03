import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const ProtectedRoutes = ({ adminOnly = false, children }) => {
  const { user, isLoading } = useContext(AuthContext);

  // ⏳ Still checking auth
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // 🔒 Not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // 👮 Admin-only route protection
  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/profile" replace />;
  }

  // ✅ Allowed
  return children;
};

export default ProtectedRoutes;
