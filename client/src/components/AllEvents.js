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

function AllEvents({events}) {

    return (
        <Container maxWidth="md">
      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={event.images}
                height="150"
              ></CardMedia>
              <CardContent>
                <strong>Name:</strong> {event.name}
                <br />
                <strong>Description:</strong> {event.description}
                <br />
                <strong>Hours Requested:</strong> {event.hours_requested}
                <br />
                <strong>Location:</strong> {event.location}
                <br />
                {/* <strong>Impacter:</strong> {request.user_name_for_request} */}
                <br />

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    )
}

export default AllEvents;