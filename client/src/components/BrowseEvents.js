import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import {
  Grid,
  Container,
} from "@mui/material";

function BrowseEvents() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((data) => setEvents(data));
  }, []);


  return (
    <Container maxWidth="md">
      <Grid container spacing={6}>
        {events.map((event) => (
            <EventCard key={event.id} event={event}/>
        ))}
      </Grid>
    </Container>
  );
}

export default BrowseEvents;
