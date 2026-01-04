import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
console.log("UserAuth role:", user?.role);
  if (loading) return <p>Checking auth...</p>;
  if (!user) return <Navigate to="/" replace />;

  if (user.role !== "admin") {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default AdminRoute;
