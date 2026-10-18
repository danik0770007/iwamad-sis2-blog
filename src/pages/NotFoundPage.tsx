import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "48px 0" }}>
      <h1
        style={{ fontSize: "3.5rem", color: "#e11d48", margin: "0 0 12px 0" }}
      >
        404
      </h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
        Page Not Found
      </h2>
      <p style={{ color: "#64748b", marginBottom: "24px" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          backgroundColor: "#2563eb",
          color: "#ffffff",
          padding: "8px 16px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Return to Homepage
      </Link>
    </div>
  );
};
