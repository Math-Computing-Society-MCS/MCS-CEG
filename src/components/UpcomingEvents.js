import React, { useState, useEffect } from "react";
import "../css/UpcomingEvents.css";
import { upCom_Alumini } from "../images/EventPage/index";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    {
      _id: 1,
      image: upCom_Alumini,
      title: "Alumni Meet",
      description:
        "The Math Computing Society (MCS), Department of Mathematics, College of Engineering Guindy, is thrilled to host an Alumni Meet. This event reconnects alumni, celebrates their achievements, and fosters valuable interactions with current students. It serves as a platform for networking, knowledge exchange, and inspiring the next generation of mathematicians and innovators. Join us to strengthen bonds and share experiences that shape the future of our community.",
      formLink: "https://forms.gle/WQcCB8FFZRnH6NQ29",
    },

    // second
  ]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/events')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Fetched events:', data); // Log events to check data
  //       const sortedEvents = data
  //         .filter(event => new Date(event.date) >= new Date()) // Filter for upcoming events
  //         .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date
  //       setEvents(sortedEvents);
  //     })
  //     .catch(error => console.error('Error fetching events:', error));
  // }, []);

  return (
    <section className="upcoming-events-container">
      <header className="upcoming-event-header">
        <h1 className="upcoming-event-title">
          <span className="upcoming">UPCOMING</span>{" "}
          <span className="events">EVENTS</span>
        </h1>
      </header>
      {events.map((event) => (
        <div className="upcoming-event-content" key={event._id}>
          <div className="upcoming-event-layout">
            <div className="upcoming-event-image-column">
              <img
                loading="lazy"
                src={event.image}
                className="upcoming-event-image"
                alt={event.title}
              />
            </div>
            <div className="upcoming-event-details-column">
              <div className="upcoming-event-details">
                <h1 className="upcoming-event-heading">{event.title}</h1>
                <p className="upcoming-event-description">
                  {event.description}
                </p>
                {event.formLink ? (
                  <a
                    href={event.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="upcoming-register-btn"
                  >
                    Register
                  </a>
                ) : (
                  <p>No registration link available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpcomingEvents;
