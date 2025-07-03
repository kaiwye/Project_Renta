import styles from "./About.module.css";
import modernHome from "../../assets/modern-home.jpg";
import Payments from "../../assets/Payments.png";
import Maintenance from "../../assets/Maintenance.png";
import Announcement from "../../assets/Announcement.png";
import { useState } from "react";

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <section className={styles.welcome}>
        <div className={styles.welcomeText}>
          <h1>About Project Renta</h1>
          <p>
            Designed with our users in mind to streamline communication and
            operations between tenants and property managers!
          </p>
        </div>
        <img
          className={styles.modernHome}
          src={modernHome}
          alt="Image of a home"
        />
      </section>
      <section className={styles.features}>
        <h2>Features</h2>
        <div className={styles.featuresCards}>
          <div
            className={styles.featuresCard}
            onClick={() =>
              setActiveCard({
                image: Payments,
                alt: "Payments",
                title: "Make Payments",
                description: "Seamless payment transactions via Stripe",
              })
            }
          >
            <h3>Make Payments</h3>
            <img src={Payments} alt="Payments" />
            <p>Seamless payment transactions via Stripe</p>
          </div>
          <div
            className={styles.featuresCard}
            onClick={() =>
              setActiveCard({
                image: Maintenance,
                alt: "MaintenanceRequests",
                title: "Submit Maintenance Requests",
                description:
                  "Responsive management team to cater to all your apartment needs",
              })
            }
          >
            <h3>Submit Maintenance Requests</h3>
            <img src={Maintenance} alt="MaintenanceRequests" />
            <p>
              Responsive management team to cater to all your apartment needs
            </p>
          </div>
          <div
            className={styles.featuresCard}
            onClick={() =>
              setActiveCard({
                image: Announcement,
                alt: "Announcements",
                title: "Share Announcements",
                description: "Build your community with your fellow neighbors",
              })
            }
          >
            <h3>Share Announcements</h3>
            <img src={Announcement} alt="Announcements" />
            <p>Build your community with your fellow neighbors</p>
          </div>
        </div>
      </section>
      {activeCard && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveCard(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeCard.title}</h2>
            <img src={activeCard.image} alt={activeCard.alt} />
            <p>{activeCard.description}</p>
            <button
              className={styles.closeButton}
              onClick={() => setActiveCard(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
