import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../Context";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  CssBaseline
} from "@mui/material";
import CarescapeCard from "./CarescapeCard";

function Carescapes() {
  const user = useContext(UserContext);
  const userId = user.currentUser.id;

  const [impacterPastEvent, setImpacterPastEvent] = useState([]);

  useEffect(() => {
    fetch("/impacter_past_events")
      .then((r) => r.json())
      .then((data) => {
        setImpacterPastEvent(data);
      });
  }, []);

  const myPastEvents = impacterPastEvent.filter(
    (pastEvent) => pastEvent.user_id === userId
  );

  return (
    <CssBaseline>
      <Card>
        <CardContent sx={{bgcolor: "#379148"}}>
          <Typography className="signin-logo" variant="h3" color="white">
            <strong>Your Carescapes</strong>
          </Typography>
          <Typography variant="h6" 
            sx={{
                margin: "auto",
              display: "flex",
              textAlign: "center",
              marginTop: "20px",
              width: "700px",
              color: "white"
            }}
          >
            For every event that you complete, you receive a carescape. Your
            carescape page is a collection of all the service you have given to
            your community.
          </Typography>
          <Link to="/allcarescapes">
            <Typography sx={{textAlign: "center", marginTop: "20px"}} variant="h5">
              See All Carescapes  
            </Typography>
            </Link>
        </CardContent>
      </Card>
      <Container maxWidth="md">
        <Grid container spacing={6}>
          {myPastEvents.map((myPastEvent) => (
            <CarescapeCard key={myPastEvent.id} myPastEvent={myPastEvent} />
          ))}
        </Grid>
      </Container>
    </CssBaseline>
  );
}

export default Carescapes;
