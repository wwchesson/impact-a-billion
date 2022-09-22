import React, { useEffect, useState, useContext } from "react";
import { Typography, Card, Button, Box } from "@mui/material";
import AllRequests from "./AllRequests";
import AllEvents from "./AllEvents";
import AllImpacters from "./AllImpacters";
import PastEvents from "./PastEvents";
import { UserContext } from "../Context";

function OrganizerHome() {
  const user = useContext(UserContext);
  const userId = user.currentUser.id;
  const [showRequests, setShowRequests] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showImpacters, setShowImpacters] = useState(false);
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setEvents(data);
      });
  }, []);

  useEffect(() => {
    fetch("/past_events")
      .then((r) => r.json())
      .then((data) => setPastEvents(data));
  }, []);

  return (
    <div>
      <Typography
        padding="20px"
        justifyContent="center"
        display="flex"
        variant="h4"
        marginBottom="10px"
      >
        What would you like to do?
      </Typography>
      <Box sx={{ flexGrow: 1 }} className="organizer-home">
        <Card className="organizer-cards">
          <Button onClick={() => setShowRequests(!showRequests)}>
            <Typography variant="h6">View Requests</Typography>
          </Button>
          {showRequests ? (
            <AllRequests setEvents={setEvents} events={events} />
          ) : null}
        </Card>
        <Card className="organizer-cards">
          <Button onClick={() => setShowEvents(!showEvents)}>
            <Typography variant="h6">View Your Events</Typography>
          </Button>
          {showEvents ? (
            <AllEvents
              events={events.filter((event) => event.organizer_id === userId)}
              setEvents={setEvents}
              setPastEvents={setPastEvents}
              pastEvents={pastEvents}
            />
          ) : null}
        </Card>
        <Card className="organizer-cards">
          <Button onClick={() => setShowImpacters(!showImpacters)}>
            <Typography variant="h6">View Impacters</Typography>
          </Button>
          {showImpacters ? <AllImpacters event={events} /> : null}
        </Card>
        <Card className="organizer-cards">
          <Button onClick={() => setShowPastEvents(!showPastEvents)}>
            <Typography variant="h6">View Your Past Events</Typography>
          </Button>
          {showPastEvents ? (
            <PastEvents
              pastEvents={pastEvents.filter(
                (pastEvent) => pastEvent.organizer_id === userId
              )}
            />
          ) : null}
        </Card>
      </Box>
    </div>
  );
}

export default OrganizerHome;
