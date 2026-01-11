// Login.jsx

import { useState } from "react";
import { useNavigate ,Link  } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form
        onSubmit={handleSubmit}
        className="login-card animate-fadeIn"
      >
        <h1 className="login-title">
          Welcome back <span>👋</span>
        </h1>

        <p className="login-subtitle">
          Login to continue managing your tasks
        </p>

        {error && (
          <p className="login-error animate-shake">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="hover-scale"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="login-footer">
            Don’t have an account?{" "}
  <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
