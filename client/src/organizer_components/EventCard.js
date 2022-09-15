import React, {useState} from "react";
import { Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import EventImpacters from "./EventImpacters"

function EventCard({ event }) {
    const [showEventImpacters, setShowEventImpacters] = useState(false)

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
          <Button onClick={() => setShowEventImpacters(!showEventImpacters)}>View Impacters for this event</Button>
          {showEventImpacters ? <EventImpacters key={event.id} eventImpacters={event.impacter_associated_with_events}/> : null}
          <br />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default EventCard;
