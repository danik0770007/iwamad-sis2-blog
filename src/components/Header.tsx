import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

export const Header = () => {
  const { isAuthenticated = false, logout } = useAuth() as unknown as {
    isAuthenticated?: boolean;
    logout: () => void;
  };

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="brand">
          DEV.LOG
        </NavLink>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              {isAuthenticated ? (
                <button
                  type="button"
                  onClick={logout}
                  className="btn btn-primary"
                  style={{ padding: "0.35rem 0.8rem" }}
                >
                  Sign Out
                </button>
              ) : (
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Sign In
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
