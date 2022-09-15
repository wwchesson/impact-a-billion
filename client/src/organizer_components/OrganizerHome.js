import React, { useEffect, useState } from "react";
import { Typography, Card, Button, Grid, Box } from "@mui/material";
import AllRequests from "./AllRequests"
import AllEvents from "./AllEvents"
import AllImpacters from "./AllImpacters"
import PastEvents from "./PastEvents"

function OrganizerHome() {
  const [showRequests, setShowRequests] = useState(false)
  const [showEvents, setShowEvents] = useState(false)
  const [showImpacters, setShowImpacters] = useState(false)
  const [showPastEvents, setShowPastEvents] = useState(false)
  const [events, setEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])

useEffect(() => {
    fetch("/events")
    .then(r => r.json())
    .then((data) => {
        // console.log(data);
        setEvents(data)
    })
}, [])

useEffect(() => {
  fetch("/past_events")
  .then(r => r.json())
  .then((data) => setPastEvents(data))
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
          {showEvents ? <AllEvents events={events} setPastEvents={setPastEvents} pastEvents={pastEvents}/> : null}
        </Card>
        <Card>
          <Button onClick={() => setShowImpacters(!showImpacters)}>View Impacters</Button>
          {showImpacters ? <AllImpacters event={events}/> : null}
        </Card>
        <Card>
          <Button onClick={() => setShowPastEvents(!showPastEvents)}>View Past Events</Button>
          {showPastEvents ? <PastEvents pastEvents={pastEvents}/> : null}
        </Card>
      </Box>
    </div>
  );
}

export default OrganizerHome;
