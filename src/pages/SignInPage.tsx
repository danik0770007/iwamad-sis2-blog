import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export const SignInPage = () => {
  const { isSignedIn, signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    signIn();
    navigate("/dashboard");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "12px" }}>
        Reader Sign In
      </h2>
      <p style={{ color: "#64748b", marginBottom: "20px" }}>
        {isSignedIn
          ? "You are currently signed in."
          : "Please sign in to access your protected reader dashboard."}
      </p>
      {!isSignedIn && (
        <button
          type="button"
          onClick={handleSignIn}
          style={{
            backgroundColor: "#2563eb",
            color: "#ffffff",
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Sign in as Member
        </button>
      )}
    </div>
  );
};
