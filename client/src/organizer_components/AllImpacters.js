import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
  Typography,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import EventAssignment from "./EventAssignment";

function AllImpacters({events}) {
  const [allImpacters, setAllImpacters] = useState([]);
  const [showEventsAssign, setShowEventsAssign] = useState(false)

  useEffect(() => {
    fetch("/impacters")
      .then((r) => r.json())
      .then((data) => setAllImpacters(data));
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {allImpacters.map((impacter) => (
          <Grid item key={impacter.id} xs={12} sm={6} md={4}>
            <Card>
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                padding="10px"
              >
                <Avatar
                  alt={impacter.name}
                  src={impacter.image}
                  sx={{ width: 150, height: 150 }}
                ></Avatar>
              </Box>

              <CardContent>
                <strong>Name:</strong> {impacter.name}
                <br />
                <strong>Skills:</strong> {impacter.skills}
                <br />
                <strong>Availability:</strong> {impacter.availability}
                <br />
                <strong>Zip Code:</strong> {impacter.zip}
                <br />
                <strong>Travel Radius:</strong> {impacter.travel_radius} miles
                <br />
                <Button onClick={() => setShowEventsAssign(!showEventsAssign)}>Assign to event</Button>
                {showEventsAssign ? <EventAssignment /> : null}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AllImpacters;
