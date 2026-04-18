import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      router.push("/blog");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "420px", margin: "80px auto", padding: "20px" }}>
      <h2>Admin Login</h2>
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "12px 14px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "12px 14px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
      />
      {error && <p style={{ color: "#d32f2f", marginBottom: "12px" }}>{error}</p>}
      <button
        onClick={handleLogin}
        style={{ width: "100%", padding: "12px 16px", backgroundColor: "#0057B8", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
      >
        Login
      </button>
    </div>
  );
}
