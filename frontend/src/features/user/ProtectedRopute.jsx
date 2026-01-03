import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const ProtectedRoutes = ({ adminOnly = false, children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/" replace />;

  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/dasboard" replace />;
  }

  return children;
};

export default ProtectedRoutes;
