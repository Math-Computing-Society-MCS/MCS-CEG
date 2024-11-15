import React from "react";
import ContactForm from "./ContactForm";
import "../css/ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>
            For <br />
            <span className="highlight">Queries</span>
          </h2>
          <p>Subheading for instructions</p>
        </div>
        <ContactForm />
      </div>
      <div className="copy-right">
        <div className="social-links">
          <p>
            Connect <br /> with <span className="highlight">Us</span>
          </p>
          <div className="icons">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mathcomputingsociety-au/",
                  "_blank"
                )
              }
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:smathcomputingsocietyau@gmail.com")
              }
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/mcs_ceg?igsh=MTRnNTJvc3RhcXNvZw==",
                  "_blank"
                )
              }
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
        <h3>© 2025 Copyrights MCS</h3>
      </div>
    </section>
  );
};

export default ContactSection;
