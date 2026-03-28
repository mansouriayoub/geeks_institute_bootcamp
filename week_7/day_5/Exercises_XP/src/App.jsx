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
      <Nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </Nav>
      <Routes>
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

      <section id="next-steps"></section>
    </>
  );
}

export default App;
