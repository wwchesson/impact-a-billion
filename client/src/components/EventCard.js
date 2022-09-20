import React, { useState, useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Button,
} from "@mui/material";
import { UserContext } from "../Context";

function EventCard({ event }) {
  const user = useContext(UserContext);
  const userId = user.currentUser.id;

  const [signUpMsg, setSignUpMsg] = useState(false);

  function handleEventSignUp(eventId) {
    fetch("/impacter_events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event_id: eventId, impacter_id: userId }),
    })
      .then((r) => r.json())
      .then(setSignUpMsg(true));
  }

  return (
    <Grid item xs={3} sm={4} md={6} key={event.id}>
      <Card>
        <CardMedia component="img" image={event.image} height="300"></CardMedia>
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            <strong>{event.name}</strong>
          </Typography>
          <Typography>
            <strong>Description: </strong>
            {event.description}
          </Typography>
          <br />
          <Typography>
            {event.category} - {event.location} - {event.date}
          </Typography>
        </CardContent>
        {signUpMsg ? (
          <Typography>You're signed up!</Typography>
        ) : (
          <Button onClick={() => handleEventSignUp(event.id)}>Sign up</Button>
        )}
      </Card>
    </Grid>
  );
}

export default EventCard;
