import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import EventCard from "./EventCard";

function AllEvents({ events, pastEvents, setPastEvents }) {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            setPastEvents={setPastEvents}
            pastEvents={pastEvents}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default AllEvents;
