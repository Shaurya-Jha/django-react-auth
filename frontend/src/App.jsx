import { Routes, Route, useLocation } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PasswordResetRequest from "./components/PasswordResetRequest";
import PasswordReset from "./components/PasswordReset";

function App() {
  const location = useLocation();
  const showNoNavbar =
    location.pathname === "/register" ||
    location.pathname === "/" ||
    location.pathname.includes("password");

  return (
    <>
      {showNoNavbar ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/request/password_reset"
            element={<PasswordResetRequest />}
          />
          <Route path="/password-reset/:token" element={<PasswordReset />} />
        </Routes>
      ) : (
        <Navbar
          content={
            <Routes>
              <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<Home />} />
              </Route>
            </Routes>
          }
        />
      )}
    </>
  );
}

export default App;
