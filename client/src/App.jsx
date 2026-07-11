import React from "react";
import Bubble from "./components/Bubble.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import EmailVerification from "./pages/EmailVerification.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  return (
    <div
      className="min-h-screen bg-linear-to-br from-gray-900 via-green-900 to-emerald-900
    flex items-center justify-center relative overflow-hidden"
    >
      <Bubble
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="50%"
        delay={0}
      />
      <Bubble
        color="bg-emerald-500"
        size="w-48 h-48"
        top="50%"
        left="-10%"
        delay={5}
      />
      <Bubble
        color="bg-lime-500"
        size="w-32 h-32"
        top="80%"
        left="60%"
        delay={2}
      />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerification />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
