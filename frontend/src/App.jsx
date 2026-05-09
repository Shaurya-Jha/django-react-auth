import { Routes, Route, useLocation } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const location = useLocation();
  const showNoNavbar =
    location.pathname === "/register" || location.pathname === "/";

  return (
    <>
      {showNoNavbar ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
