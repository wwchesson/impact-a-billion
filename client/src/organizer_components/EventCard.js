import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import EventImpacters from "./EventImpacters";

function EventCard({ event, events, setEvents, pastEvents, setPastEvents }) {
  const [showEventImpacters, setShowEventImpacters] = useState(false);


  function handleEventCompletedClick(id) {
    fetch(`events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true }),
    })
      .then((r) => r.json())
      .then((pastEventObj) => {
        // fetch(`/events/${id}`, {
        //   method: "DELETE",
        // });
        setEvents(events.filter(event => event.id !== id));

        console.log(pastEventObj)
        setPastEvents([...pastEvents, pastEventObj]);
      });
  }

  return (
    <Grid item key={event.id} xs={12} sm={6} md={4}>
      <Card>
        <CardMedia component="img" image={event.image} height="150"></CardMedia>
        <CardContent>
          <strong>Name:</strong> {event.name}
          <br />
          <strong>Description:</strong> {event.description}
          <br />
          <strong>Hours Requested:</strong> {event.hours_requested}
          <br />
          <strong>Location:</strong> {event.location}
          <br />
          <Button onClick={() => handleEventCompletedClick(event.id)}>
            Mark as complete
          </Button>
          <br />
          <Button onClick={() => setShowEventImpacters(!showEventImpacters)}>
            Event Impacters
          </Button>
          {showEventImpacters ? (
            <EventImpacters
              key={event.id}
              eventImpacters={event.impacter_associated_with_events}
            />
          ) : null}
          <br />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default EventCard;
