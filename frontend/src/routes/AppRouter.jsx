import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "../pages/Register.jsx";
import Login from "../features/auth/Login.jsx";
import Dashboard from "../features/admin/Dashboard.jsx";
import Profile from "../features/user/Profile.jsx";
import { Noroute } from "../pages/Noroute.jsx";
import { AuthProvider } from "../Context/AuthContext.jsx";
import ProtectedRoute from "../features/user/ProtectedRopute.jsx";
import { DonorsProvider } from "../Context/ListContext.jsx";
import AdminRoute from "../features/auth/AdminRoute.jsx";
import UserAuth from "../features/auth/UserAuth.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Noroute />} />

      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <UserAuth>
      
            <Profile />
          </UserAuth>
        }
      />
    </Routes>
  );
};

export default AppRouter;
