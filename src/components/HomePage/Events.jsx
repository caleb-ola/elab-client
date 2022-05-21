import React from 'react';
import EventCard from '../ResuableComponents/EventCard';

function Events() {
  return (
    <div className="events py-5">
      <div className="container py-lg-5">
        <div className="partner__header text-center mx-auto">
          <h2 className="event__header--title">Events Just For You!</h2>
          <p className="events__header--text">
            We are consistently curating the best events that help our
            community achieve their dreams.
          </p>
        </div>

        <div className="row py-4 g-4">
          <div className="col-md-6 col-lg-4 my-2 p-lg-4">
            <EventCard image="/images/home/event1.png" label="Fireside chat" title="Header text for program title and it can be this long" />
          </div>
          <div className="col-md-6 col-lg-4 my-2 p-lg-4">
            <EventCard image="/images/home/event2.png" label="Fireside chat" title="Header text for program title and it can be this long" />
          </div>
          <div className="col-md-6 col-lg-4 my-2 p-lg-4">
            <EventCard image="/images/home/event3.png" label="Fireside chat" title="Header text for program title and it can be this long" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
