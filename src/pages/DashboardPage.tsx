import { useAuth } from "../context/AuthContext";

export const DashboardPage = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "12px" }}>
        Reader Dashboard
      </h2>
      <p style={{ color: "#334155", lineHeight: 1.6, marginBottom: "20px" }}>
        This is a protected member-only area. You have unlocked access to
        exclusive subscriber content.
      </p>
      <button
        type="button"
        onClick={signOut}
        style={{
          backgroundColor: "#ef4444",
          color: "#ffffff",
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Sign out
      </button>
    </div>
  );
};
