import { useState } from "react";
import { Link, useNavigate } from "react-router";
import styles from "./Register.module.css";

import { useAuth } from "./AuthContext";

/** A form that allows users to register for a new account */
export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const unit = formData.get("unit");

    setError(null);
    setLoading(true);

    try {
      await register({
        username,
        password,
        firstName,
        lastName,
        email,
        unit,
      });
      navigate("/");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.register}>
        <div className={styles.registerForm}>
          <h1>Register For An Account</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onRegister(new FormData(e.target));
            }}
          >
            <label>
              <span>Username: </span>
              <input type="text" name="username" required />
            </label>
            <label>
              <span>Password: </span>
              <input type="password" name="password" required />
            </label>
            <label>
              <span>First Name: </span>
              <input type="text" name="firstName" required />
            </label>
            <label>
              <span>Last Name: </span>
              <input type="text" name="lastName" required />
            </label>
            <label>
              <span>Email: </span>
              <input type="email" name="email" required />
            </label>
            <label>
              <span>Unit: </span>
              <input
                type="number"
                name="unit"
                min="1"
                max="10"
                placeholder="1"
              />
            </label>
            <button type="submit" disabled={loading}>
              {loading ? "Registering your account..." : "Register"}
            </button>
            {error && <output>an error occurred, please try again</output>}
          </form>
          <Link to="/login">Already have an account? Log in here.</Link>
        </div>
      </div>
    </>
  );
}
