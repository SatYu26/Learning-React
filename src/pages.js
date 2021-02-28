import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company website]</h1>
      <nav>
        <Link to="about">About</Link>
      </nav>
      <nav>
        <Link to="events">Event</Link>
      </nav>
      <nav>
        <Link to="contacts">Contacts</Link>
      </nav>
    </div>
  );
}
export function About() {
  return (
    <div>
      <h1>[About Page]</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events Page]</h1>
    </div>
  );
}

export function Contacts() {
  return (
    <div>
      <h1>[Contacts Page]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>{location.pathname} does not exist!</h1>
    </div>
  );
}
