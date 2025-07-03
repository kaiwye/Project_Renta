import styles from "./LandingPageNavbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import rentaLogo from "../assets/renta-logo.png";

function PublicNav() {
  return (
    <div className={styles.Nav}>
      <div className={styles.NavLogo}>
        <NavLink to="/">
          <img width={"45px"} src={rentaLogo} alt="logo" />
        </NavLink>
      </div>
      <div className={styles.NavLinks}>
        <NavLink to="/about" className={styles.links}>
          <ion-icon name="information-circle-outline"></ion-icon>
          About
        </NavLink>
        <NavLink to="/login" className={styles.loginButton}>
          Login
        </NavLink>
      </div>
    </div>
  );
}

function ResidentNav({ logout }) {
  return (
    <div className={styles.Nav}>
      <div className={styles.NavLogo}>
        <NavLink to="/">
          <img width={"45px"} src={rentaLogo} alt="logo" />
        </NavLink>
      </div>
      <div className={styles.NavLinks}>
        <NavLink to="/about" className={styles.links}>
          <ion-icon name="information-circle-outline"></ion-icon>
          About
        </NavLink>
        <NavLink to="/resident/dashboard" className={styles.links}>
          <ion-icon name="apps-outline"></ion-icon>
          Dashboard
        </NavLink>
        <button onClick={logout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
}

function ManagerNav({ logout }) {
  return (
    <div className={styles.Nav}>
      <div className={styles.NavLogo}>
        <NavLink to="/">
          <img width={"45px"} src={rentaLogo} alt="logo" />
        </NavLink>
      </div>
      <div className={styles.NavLinks}>
        <NavLink to="/about" className={styles.links}>
          <ion-icon name="information-circle-outline"></ion-icon>
          About
        </NavLink>
        <NavLink to="/admin/dashboard" className={styles.links}>
          <ion-icon name="apps-outline"></ion-icon>
          Dashboard
        </NavLink>
        <button onClick={logout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default function LandingPageNavbar() {
  const { token, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header>
      <nav>
        {!token ? (
          <PublicNav />
        ) : user?.is_manager ? (
          <ManagerNav logout={handleLogout} />
        ) : (
          <ResidentNav logout={handleLogout} />
        )}
      </nav>
    </header>
  );
}
