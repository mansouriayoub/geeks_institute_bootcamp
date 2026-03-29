import "./App.css";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./components/HomeScreen";
import Profile from "./components/ProfileScreen";
import Shop from "./components/ShopScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import { Nav } from "react-bootstrap";

function App() {
  const location = useLocation()
  return (
    <>
      <Nav
        variant="pills"
        className="justify-content-center mb-4"
        style={{ fontSize: "1.1rem", background: "#f5f5f5", padding: "10px", borderRadius: "10px" }}
      >
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/"
            end
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#fff" : "#007bff",
              backgroundColor: isActive ? "#007bff" : "transparent",
              borderRadius: "5px",
              padding: "8px 16px"
            })}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/profile"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#fff" : "#007bff",
              backgroundColor: isActive ? "#007bff" : "transparent",
              borderRadius: "5px",
              padding: "8px 16px"
            })}
          >
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/shop"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#fff" : "#007bff",
              backgroundColor: isActive ? "#007bff" : "transparent",
              borderRadius: "5px",
              padding: "8px 16px"
            })}
          >
            Shop
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        {/* 
          location.pathname gives you the current path in the URL (e.g., "/", "/profile").
          By setting the `key` prop of ErrorBoundary to location.pathname, you force ErrorBoundary to remount
          and reset its error state whenever the route changes. This ensures that if an error occurs
          on one route and you navigate to a different route, the error boundary is 'reset' for the new page.
        */}
        <Route
          path="/"
          element={
            <ErrorBoundary key={location.pathname}>
              <Home />
            </ErrorBoundary>
          }
        />

        <Route
          path="/profile"
          element={
            <ErrorBoundary key={location.pathname}>
              <Profile />
            </ErrorBoundary>
          }
        />

        <Route
          path="/shop"
          element={
            <ErrorBoundary key={location.pathname}>
              <Shop />
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  );
}

export default App;
