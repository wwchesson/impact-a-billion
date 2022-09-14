import React, { useEffect, useState } from "react";
import { Typography, Card, Button, Grid, Box } from "@mui/material";
import AllRequests from "./AllRequests"
import AllEvents from "./AllEvents"

function OrganizerHome() {
  const [showRequests, setShowRequests] = useState(false)
  const [showEvents, setShowEvents] = useState(false)
  const [events, setEvents] = useState([])

useEffect(() => {
    fetch("/events")
    .then(r => r.json())
    .then((data) => {
        console.log(data);
        setEvents(data)
    })
}, [])

  return (
    <div>
      <Typography
        padding="10px"
        justifyContent="center"
        display="flex"
        variant="h3"
      >
        What would you like to do?
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Card>
          <Button onClick={() => setShowRequests(!showRequests)}>View Requests</Button>
          {showRequests ? <AllRequests setEvents={setEvents} events={events}/> : null}
        </Card>
        <Card>
          <Button onClick={() => setShowEvents(!showEvents)}>View Events</Button>
          {showEvents ? <AllEvents events={events}/> : null}
        </Card>
        <Card>
          <Button>Create Carescape</Button>
        </Card>
      </Box>
    </div>
  );
}

export default OrganizerHome;
