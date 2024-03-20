import "./App.css";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot-password";
import PasswordSet from "./pages/password-set";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="password-set" element={<PasswordSet />} />
    </Routes>
  );
}

export default App;
