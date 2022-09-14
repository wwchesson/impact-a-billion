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
import {UserContext} from "../Context"

function AllRequests({setEvents}) {
    const user = useContext(UserContext);
    const organizer_id = user.currentUser.id
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    fetch("/requests")
      .then((r) => r.json())
      .then((data) => setAllRequests(data));
  }, []);



function handleApproveClick(id) {
    fetch(`/requests/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({request: {approved: "approved", organizer_id: organizer_id }})
    })
    .then((r) => r.json())
    .then((eventObj) => {
    })
}

// function eventPost(eventObj) {
//     fetch("/events", {
//         method: "POST",
//         headers: { 
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({eventObj})
//     })
//     .then((r) => r.json())
//     .then((data) => {
//         console.log(data);
//         setEvents(data)

//     })
// }

  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {allRequests.map((request) => (
          <Grid item key={request.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={request.images}
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
                <Button onClick={() => handleApproveClick(request.id)}>Approve</Button>
                <Button>Deny</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AllRequests;
