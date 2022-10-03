import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import EventCard from "./EventCard";

function AllEvents({ events, setEvents, pastEvents, setPastEvents }) {
  if (events.length >= 1 ) {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            events={events}
            setEvents={setEvents}
            setPastEvents={setPastEvents}
            pastEvents={pastEvents}
          />
        ))}
      </Grid>
    </Container>
  )}
  else {
    return <Typography sx={{padding: "10px"}}>You have no events at this time.</Typography>
  }
}

export default AllEvents;
