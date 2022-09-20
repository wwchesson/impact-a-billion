import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
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
          <Grid item xs={3} sm={4} md={6} key={event.id}>
            <Card>
              <CardMedia
                component="img"
                image={event.image}
                height="300"
              ></CardMedia>
              <CardContent>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  <strong>{event.name}</strong>
                </Typography>
                <Typography><strong>Description: </strong>{event.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BrowseEvents;
