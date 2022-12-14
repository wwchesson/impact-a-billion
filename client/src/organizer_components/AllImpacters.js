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

function AllImpacters({ events }) {
  const [showEvents, setShowEvents] = useState(false);
  const [allImpacters, setAllImpacters] = useState([]);
  const [impacterEvents, setImpacterEvents] = useState([]);

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

              <CardContent sx={{}}>
                <Typography>
                  <strong>Name:</strong> {impacter.name}
                </Typography>
                <Typography>
                  <strong>Skills:</strong> {impacter.skills}
                </Typography>
                <Typography>
                  <strong>Availability:</strong> {impacter.availability}
                </Typography>
                <Typography>
                  <strong>Zip Code:</strong> {impacter.zip}
                </Typography>
                <Typography>
                  <strong>Travel Radius:</strong> {impacter.travel_radius} miles
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AllImpacters;
