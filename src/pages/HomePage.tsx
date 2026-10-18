import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "12px" }}>
        Welcome to TechLog
      </h2>
      <p style={{ lineHeight: 1.6, color: "#334155", marginBottom: "20px" }}>
        A modern, component-based blog platform built with React, TypeScript,
        and React Router. Explore articles or sign in to access member
        dashboard.
      </p>
      <Link
        to="/posts"
        style={{
          display: "inline-block",
          backgroundColor: "#2563eb",
          color: "#ffffff",
          padding: "10px 18px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Explore all posts →
      </Link>
    </div>
  );
};
