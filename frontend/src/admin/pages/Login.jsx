import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/admin/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to bottom right, #0f172a, #020617)",
      fontFamily: "'Inter', sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <span key={i} style={{
          position: "absolute",
          width: `${Math.random() * 6 + 4}px`,
          height: `${Math.random() * 6 + 4}px`,
          background: "rgba(255,255,255,0.15)",
          borderRadius: "50%",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite alternate`
        }} />
      ))}

      <form
        onSubmit={handleLogin}
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "400px",
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          borderRadius: "2rem",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          transition: "transform 0.3s",
        }}
      >
        <h1 style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "white",
          textAlign: "center",
          marginBottom: "1rem"
        }}>Admin Login</h1>

        {error && (
          <div style={{
            background: "rgba(255,0,0,0.2)",
            color: "#ff4d4d",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            textAlign: "center"
          }}>
            {error}
          </div>
        )}

        {/* Email input */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email" style={{ color: "white", fontWeight: "600", marginBottom: "0.25rem" }}>Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            required
            style={{
              padding: "0.75rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              outline: "none"
            }}
          />
        </div>

        {/* Password input */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="password" style={{ color: "white", fontWeight: "600", marginBottom: "0.25rem" }}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
            style={{
              padding: "0.75rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              outline: "none"
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.75rem",
            borderRadius: "1rem",
            background: "#25D366",
            color: "white",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 5px 15px rgba(37, 211, 102, 0.3)"
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Inline Keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Login;