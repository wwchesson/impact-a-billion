import React, { useEffect, useState } from "react";
import { Typography, Card, Button, Grid, Box } from "@mui/material";
import AllRequests from "./AllRequests"

function OrganizerHome() {
  const [orgRequest, setOrgRequest] = useState({});
  const [showRequests, setShowRequests] = useState(false)
  const [events, setEvents] = useState([])

useEffect(() => {
    
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
          {showRequests ? <AllRequests /> : null}
        </Card>
        <Card>
          <Button>View Events</Button>
        </Card>
        <Card>
          <Button>Create Carescape</Button>
        </Card>
      </Box>
    </div>
  );
}

export default OrganizerHome;
