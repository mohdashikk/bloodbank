import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const UserAuth = ({ children }) => {
  const { user, loading } = useContext(AuthContext);


  if (loading) return <p>Checking auth...</p>;

  if (!user) return <Navigate to="/" replace />;

  if (user.role === "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default UserAuth;
