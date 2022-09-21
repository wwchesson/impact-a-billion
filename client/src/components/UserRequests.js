import React, { useState} from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import EditRequests from "./EditRequests";

function UserRequests({ requests, setRequests }) {
  const [showEditRequest, setShowEditRequest] = useState(false)

  const approved = requests.map((request) => {
    if (request.approved === "pending") {
      return <Typography key={request.id}> <strong>Status:</strong> Still pending</Typography>;
    } else if (request.approved === "approved") {
      return <Typography key={request.id}> <strong>Status:</strong> Approved! </Typography>;
    } else {
      return <Typography key={request.id}> <strong>Status:</strong> Sorry this request was denied </Typography>;
    }
  });

  return (
    <div>
      {requests.map((request) => (
        <Card key={request.id}>
          <CardContent>
            <Typography align="center">
              <strong>{request.name} </strong>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={request.images}
            height="250"
          ></CardMedia>
          <CardContent>
            <Typography>
              <strong>Description:</strong> {request.description}
            </Typography>
            <br />
            <Typography>
              <strong>Category: </strong> {request.category}
            </Typography>
            <br />
            <Typography>
              <strong>Hours Requested:</strong> {request.hours_requested} hours {request.frequency.toLowerCase()}
            </Typography>
            <br />
            <Typography>
              <strong>Volunteers Needed: </strong> {request.volunteers_needed}
            </Typography>
            <br />
            {approved}
            <br />
            <Button onClick={() => setShowEditRequest(!showEditRequest)}>Edit</Button>
            {showEditRequest ? <EditRequests requests={requests} setRequests={setRequests} showEditRequest={showEditRequest} setShowEditRequest={setShowEditRequest}/>: null}
            <Button>Delete</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserRequests;
