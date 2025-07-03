import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

import { useAuth } from "./AuthContext";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    setError(null);
    setLoading(true);

    try {
      const loggedInUser = await login({ username, password });

      if (loggedInUser.is_manager) {
        navigate("/admin/dashboard");
      } else {
        navigate("/resident/dashboard");
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginForm}>
          <h1>Login</h1>
          <form action={onLogin}>
            <label>
              <span>Username: </span>
              <input type="username" name="username" required />
            </label>
            <label>
              <span>Password: </span>
              <input type="password" name="password" required />
            </label>
            <button disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <output>{error}</output>}
          </form>
          <Link to="/register">Need an account? Register here.</Link>
        </div>
      </div>
    </>
  );
}
