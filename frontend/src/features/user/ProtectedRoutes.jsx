import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ adminOnly, children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading......</p>;
  if (!user) return <Navigate to="/" replace />;
  if (adminOnly && !user.role === "admin")
    return <Navigate to="/profile" replace />;
  return children;
};

export default ProtectedRoutes;
