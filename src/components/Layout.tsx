import { NavLink, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

export const Layout = () => {
  const { isSignedIn, signOut } = useAuth();

  const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#2563eb" : "#475569",
    fontWeight: isActive ? 700 : 500,
    textDecoration: isActive ? "underline" : "none",
  });

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "16px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>TechLog</h1>
        <nav style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <NavLink to="/" end style={getLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/posts" style={getLinkStyle}>
            Posts
          </NavLink>
          <NavLink to="/contact" style={getLinkStyle}>
            Contact
          </NavLink>
          <NavLink to="/dashboard" style={getLinkStyle}>
            Dashboard
          </NavLink>
          {isSignedIn ? (
            <button
              type="button"
              onClick={signOut}
              style={{
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "4px",
                border: "1px solid #cbd5e1",
                background: "#f8fafc",
              }}
            >
              Sign out
            </button>
          ) : (
            <NavLink to="/signin" style={getLinkStyle}>
              Sign in
            </NavLink>
          )}
        </nav>
      </header>

      <main style={{ flex: 1, padding: "24px 0" }}>
        <Outlet />
      </main>

      <footer
        style={{
          borderTop: "1px solid #e2e8f0",
          paddingTop: "16px",
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "0.875rem",
        }}
      >
        <p>© 2026 TechLog. All rights reserved.</p>
      </footer>
    </div>
  );
};
