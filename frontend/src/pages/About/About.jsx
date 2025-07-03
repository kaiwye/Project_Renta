import styles from "./About.module.css";
import modernHome from "../../assets/modern-home.jpg";

export default function About() {

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

          <div className={styles.featuresCard}>
            <img src="https://placehold.co/250x200" alt="Placeholder Image" />
            <h3>Feature 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quas laudantium hic quaerat corporis sint minima.
            </p>
          </div>

          <div className={styles.featuresCard}>
            <img src="https://placehold.co/250x200" alt="Placeholder Image" />
            <h3>Feature 2</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              quisquam eius quam repellendus.
            </p>
          </div>

          <div className={styles.featuresCard}>
            <img src="https://placehold.co/250x200" alt="Placeholder Image" />
            <h3>Feature 3</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              quisquam eius quam repellendus, recusandae nemo eos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
