import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { Grid, Container, Card, CardContent, Typography } from "@mui/material";

function BrowseEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
<Card>
        <CardContent sx={{bgcolor: "#379148"}}>
          <Typography className="signin-logo" variant="h3" color="white">
            <strong>Events</strong>
          </Typography>
          <Typography variant="h6" 
            sx={{
                margin: "auto",
              display: "flex",
              textAlign: "center",
              marginTop: "20px",
              width: "450px",
              color: "white"
            }}
          >
            Below are the current events happening in your area. We look forward to seeing you there.
          </Typography>

        </CardContent>
      </Card>
<br />
    <Container maxWidth="md">
      <Grid container spacing={6}>
      
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            events={events}
            setEvents={setEvents}
          />
        ))}
      </Grid>
    </Container>
    </div>
  );
}

export default BrowseEvents;
