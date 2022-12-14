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

function PastEvents({ pastEvents }) {
  if (pastEvents.length >= 1) {
    return (
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {pastEvents.map((pastEvent) => (
            <Grid item key={pastEvent.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={pastEvent.carescape_image}
                  height="150"
                ></CardMedia>
                <CardContent>
                  <strong>Name:</strong> {pastEvent.name}
                  <br />
                  <strong>Location:</strong> {pastEvent.location}
                  <br />
                  <strong>Date:</strong> {pastEvent.date}
                  <br />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  } else {
    return <Typography>You have no past events at this time.</Typography>;
  }
}

export default PastEvents;
