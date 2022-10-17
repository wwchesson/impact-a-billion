import React, { useEffect, useState, useContext } from "react";
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
import { UserContext } from "../Context";

function AllRequests({ setEvents, events }) {
  const user = useContext(UserContext);
  const organizer_id = user.currentUser.id;
  const [allRequests, setAllRequests] = useState([]);


  useEffect(() => {
    fetch("/requests")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        setAllRequests(data.filter((request) => request.user_id !== organizer_id))});
  }, []);

  function handleApproveClick(id) {
    fetch(`/requests/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        request: { approved: "approved", organizer_id: organizer_id },
      }),
    })
      .then((r) => r.json())
      .then((eventObj) => {
        fetch(`/requests/${id}`, {
          method: "DELETE",
        });
        setAllRequests(allRequests.filter((request) => request.id !== id));
        setEvents([...events, eventObj]);
      });
  }

  function handleDenyClick(id) {
    fetch(`/requests/${id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(setAllRequests(allRequests.filter(request => request.id !== id)));
  }

  if (allRequests.length >= 1) {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {allRequests.map((request) => (
          <Grid item key={request.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={request.image}
                height="150"
              ></CardMedia>
              <CardContent>
                <strong>Name:</strong> {request.name}
                <br />
                <strong>Description:</strong> {request.description}
                <br />
                <strong>Hours Requested:</strong> {request.hours_requested}
                <br />
                <strong>Location:</strong> {request.location}
                <br />
                <strong>Impacter:</strong> {request.user_name_for_request}
                <br />
                <Button onClick={() => handleApproveClick(request.id)}>
                  Approve
                </Button>
                <Button onClick={() => handleDenyClick(request.id)}>Deny</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )}
  else {
    return (<Typography sx={{padding: "10px"}}>There are no requests at this time.</Typography>)
  }
}

export default AllRequests;
