import React, { useEffect, useState } from "react";
import { getEvents } from "./EventManager.js";

export const EventList = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <article className="events">
      {events.map((event) => {
        return (
          <section key={`event--${event.id}`} className="event">
            <div className="event__description">
              {event.description} by {event.maker}
            </div>
            <div className="event__date">{event.date} players needed</div>
            <div className="game__id">{event.game_id} players needed</div>
            <div className="event__organizer">
              Skill level is {event.organizer_id}
            </div>
            <div className="event__skillLevel">
              Skill level is {event.skill_level}
            </div>
          </section>
        );
      })}
    </article>
  );
};
