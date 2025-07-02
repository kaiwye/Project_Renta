// frontend/src/pages/ManagerRates/ManagerRates.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQuery from "../../api/useQuery";
import { useApi } from "../../api/ApiContext";
import styles from "./ManageRates.module.css";

export default function ManagerRates() {
  const navigate = useNavigate();
  const { request, invalidateTags } = useApi();
  const { data: rates, loading } = useQuery("/rates", "rates");

  const [formState, setFormState] = useState({
    rate_water: "",
    rate_electric: "",
    rate_gas: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    if (rates) {
      setFormState({
        rate_water: rates.rate_water || "",
        rate_electric: rates.rate_electric || "",
        rate_gas: rates.rate_gas || "",
      });
    }
  }, [rates]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      await request("/rates", {
        method: "PUT",
        body: JSON.stringify(formState),
      });

      setMessage({
        type: "success",
        text: "Rates updated successfully! Redirecting...",
      });
      invalidateTags(["rates"]);

      setTimeout(() => {
        navigate("/admin/utilities");
      }, 2000);
    } catch (error) {
      setMessage({
        type: "error",
        text: `Failed to update rates: ${error.message}`,
      });
      setIsSubmitting(false);
    }
  };

  if (loading) return <p>Loading Rates...</p>;

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1>Manage Utility Rates</h1>
        </header>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="rate_water">Water Rate ($ / gallon)</label>
              <input
                id="rate_water"
                name="rate_water"
                type="number"
                step="0.001"
                value={formState.rate_water}
                onChange={handleInputChange}
              />
              <p className={styles.description}>
                The cost per gallon of water.
              </p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="rate_electric">Electric Rate ($ / kWh)</label>
              <input
                id="rate_electric"
                name="rate_electric"
                type="number"
                step="0.001"
                value={formState.rate_electric}
                onChange={handleInputChange}
              />
              <p className={styles.description}>
                The cost per kilowatt-hour of electricity.
              </p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="rate_gas">Gas Rate ($ / therm)</label>
              <input
                id="rate_gas"
                name="rate_gas"
                type="number"
                step="0.01"
                value={formState.rate_gas}
                onChange={handleInputChange}
              />
              <p className={styles.description}>
                The cost per therm of natural gas.
              </p>
            </div>
            <div className={styles.submitContainer}>
              <button
                type="submit"
                className={styles.primaryButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Rates"}
              </button>
            </div>
            {message.text && (
              <div className={`${styles.message} ${styles[message.type]}`}>
                {message.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
