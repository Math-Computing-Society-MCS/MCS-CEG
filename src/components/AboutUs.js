import React from "react";
import "../css/AboutUs.css";
import aboutUsLoop from "../images/AboutUs-lp.png";
import UpcomingEvents from "./UpcomingEvents";

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us-images">
        <img src={aboutUsLoop} alt="Loop" className="about-us-loop" />
      </div>
      <div className="about-us-content">
        <h2 className="about-us-header">ABOUT US</h2>
        <p className="about-us-title">
          WE'RE CODERS, ENTHUSIASTS, GEEKS.
          <br />
          WE'RE <span className="msc-title">MSCIANS</span>
        </p>
        <p className="about-us-description">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The
          Math Computing Society (MCS) is a dynamic, student-run organization in
          the Department of Mathematics, College of Engineering Guindy (CEG),
          Anna University, supported by the guidance of dedicated faculty
          members. MCS is committed to fostering a collaborative and engaging
          learning environment, bridging the realms of mathematics and
          computing. The society organizes events and technical sessions
          tailored for juniors and other students, aiming to inspire curiosity,
          provide hands-on exposure to modern computational tools, and empower
          students with valuable knowledge. Through interactive workshops,
          hackathons, and technical talks, MCS creates opportunities for skill
          enhancement, interdisciplinary exploration, and peer collaboration.
          With a focus on growth, innovation, and the practical applications of
          mathematics, MCS serves as a vibrant platform for students to learn,
          connect, and thrive in an ever-evolving academic and technological
          landscape.
        </p>
      </div>
      <div className="about-us-bg-container">
        <h1 className="about-us-bg-text">About US</h1>
      </div>
      <UpcomingEvents />
    </section>
  );
};

export default AboutUs;
