import React, { useState, useEffect } from "react";
import "../css/FilterEvents.css";
// import EvIMg from "../images/Events/Pics/algoarena1.0.jpg";
import {
  algoArena1,
  algoArena2,
  typeWrit,
  Aptitude,
  github,
  graphicsDesign,
  AluminiMeet,
  ProbSol,
  uiux,
} from "../images/EventPage/index";

const FilterEvents = () => {
  const [events, setEvents] = useState([
    {
      _id: 1,
      image: algoArena1,
      title: "ALGO ARENA 1.0",
      description:
        "Algo Arena 1.0 was a coding contest organized by the Math Computing Society (MCS) on October 14, 2023, exclusively for 1st and 2nd-year students. The event focused on enhancing algorithmic problem-solving skills and introducing participants to competitive programming.It featured a set of programming challenges aimed at testing logical reasoning, coding proficiency, and the ability to tackle complex problems efficiently",
      category: "events",
      formLink: "fefe",
    },
    {
      _id: 2,
      image: algoArena2,
      title: "ALGO ARENA 2.0",
      description:
        "Algo Arena 2.0, the second coding contest by the Math Computing Society (MCS), took place on April 15, 2023. The event provided an opportunity to develop their problem-solving skills and get hands-on experience in competitive programming. It featured a range of algorithmic challenges designed to test participants’ logical thinking, coding skills, and their ability to solve complex problems effectively.",
      category: "events",
      formLink: "fefe",
    },
    {
      _id: 3,
      image: ProbSol,
      title: "Problem Solving",
      description:
        "The Math Computing Society (MCS) hosted a series of weekly Problem-Solving Events aimed at honing the analytical and critical thinking skills of participants. These sessions featured diverse challenges designed to test logical reasoning and strategic problem-solving, providing a dynamic platform for students to enhance their abilities in a collaborative, competitive setting. ",
      category: "events",
      formLink: "fefe",
    },
    {
      _id: 4,
      image: AluminiMeet,
      title: "Alumni meet",
      description:
        "The Alumni Meet, held on October 15, 2023, featured the participation of the Head of Department, faculty members, alongside current students. The event served as a platform for fostering professional networking and knowledge exchange, offering students valuable insights into industry advancements, career opportunities, and the ongoing contributions of alumni to the field, thereby reinforcing the enduring relationship between the department and its graduates.",
      category: "events",
      formLink: "fefe",
    },
    {
      _id: 5,
      image: typeWrit,
      title: "Type writing test",
      description:
        "The Math Computing Society (MCS) conducted a Typing Proficiency Test tailored for junior students, aimed at enhancing their typing speed and accuracy. This initiative was designed to improve essential keyboarding skills, fostering greater efficiency in coding and academic tasks through structured, timed assessments.",
      category: "sessions",
      formLink: "fefe",
    },
    {
      _id: 6,
      image: Aptitude,
      title: "Aptitude test",
      description:
        "The Aptitude Test, conducted by the Math Computing Society (MCS), aimed to enhance the analytical and problem-solving skills of junior students. The assessment featured a diverse range of questions covering numerical reasoning, logical analysis, and verbal aptitude, providing participants with valuable practice to strengthen their core competencies and prepare for future challenges.",
      category: "sessions",
      formLink: "fefe",
    },
    {
      _id: 7,
      image: github,
      title: "Github session",
      description:
        "The GitHub session, conducted on October 13, 2023, provided an in-depth exploration of Git and GitHub, focusing on their practical applications for version control and collaborative development. The session covered advanced features and best practices, equipping participants with essential skills to effectively manage code repositories, streamline workflows, and enhance collaboration within development teams. ",
      category: "sessions",
      formLink: "fefe",
    },
    {
      _id: 8,
      image: github,
      title: "UI/UX",
      description:
        "The UI/UX Workshop, held on April 3, 2024, at the department lab, provided an immersive learning experience on the principles of user interface and user experience design. The session focused on Figma, a powerful and collaborative design tool widely used in the industry for creating wireframes, prototypes, and high-fidelity user interfaces. The workshop aimed to equip attendees with essential skills to enhance their design proficiency and build user-centered digital products.",
      category: "sessions",
      formLink: "fefe",
    },
    {
      _id: 9,
      image: graphicsDesign,
      title: "Graphics design workshop",
      description:
        "The Graphics Design Workshop, conducted on October 26, 2024, at Srinivasa Ramanujan Hall, offered a comprehensive overview of design principles and techniques using Adobe Illustrator. Led by an industry expert, the workshop provided participants with valuable insights into creating visually compelling designs, from basic concepts to advanced graphic design strategies. Attendees gained hands-on experience with Illustrator’s tools and features, equipping them with the skills necessary to produce professional-grade designs for a variety of digital and print media.",
      category: "workshops",
      formLink: "fefe",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("events");

  // useEffect(() => {
  //   fetch('http://localhost:5000/events')
  //     .then(response => response.json())
  //     .then(data => setEvents(data))
  //     .catch(error => console.error('Error fetching events:', error));
  // }, []);

  const filteredEvents = events.filter(
    (event) => event.category === selectedCategory
  );

  return (
    <section className="filter-events-container">
      <header className="filter-event-header">
        <div className="category-buttons">
          <button
            className={`category-btn ${
              selectedCategory === "events" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("events")}
          >
            EVENTS
          </button>
          <button
            className={`category-btn ${
              selectedCategory === "workshops" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("workshops")}
          >
            WORKSHOP
          </button>
          <button
            className={`category-btn ${
              selectedCategory === "sessions" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("sessions")}
          >
            SESSION
          </button>
        </div>
      </header>
      {filteredEvents.map((event) => (
        <div className="filter-event-content" key={event._id}>
          <div className="filter-event-layout">
            <div className="filter-event-image-column">
              <img
                loading="lazy"
                src={event.image}
                className="filter-event-image"
                alt={event.title}
              />
            </div>
            <div className="filter-event-details-column">
              <div className="filter-event-details">
                <h1 className="filter-event-heading">{event.title}</h1>
                <p className="filter-event-description">{event.description}</p>
                {/* {event.formLink ? (
                  <a
                    href={event.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="filter-register-btn"
                  >
                    Register
                  </a>
                ) : (
                  <p>No registration link available</p>
                )} */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FilterEvents;
