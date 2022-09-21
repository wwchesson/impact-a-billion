import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import EditRequests from "./EditRequests";

function UserRequests({ requests, setRequests }) {
  const [showEditRequest, setShowEditRequest] = useState(false);

  const approved = requests.map((request) => {
    if (request.approved === "pending") {
      return (
        <Typography key={request.id}>
          {" "}
          <strong>Status:</strong> Still pending
        </Typography>
      );
    } else if (request.approved === "approved") {
      return (
        <Typography key={request.id}>
          {" "}
          <strong>Status:</strong> Approved!{" "}
        </Typography>
      );
    } else {
      return (
        <Typography key={request.id}>
          {" "}
          <strong>Status:</strong> Sorry this request was denied{" "}
        </Typography>
      );
    }
  });

  function handleRequestDelete(id) {
    fetch(`/requests/${id}`, {
      method: "DELETE",
    }).then(setRequests(requests.filter((request) => request.id !== id)));
  }

  return (
    <div>
      {requests.map((request) => (
        <Card key={request.id} className="request-card">
          <CardContent>
            <Typography align="center">
              <strong>{request.name} </strong>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={request.image}
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
              <strong>Hours Requested:</strong> {request.hours_requested} hours{" "}
              {request.frequency.toLowerCase()}
            </Typography>
            <br />
            <Typography>
              <strong>Volunteers Needed: </strong> {request.volunteers_needed}
            </Typography>
            <br />
            {approved}
            <br />
            <Button onClick={() => handleRequestDelete(request.id)}>
              <Typography variant="h6">Delete</Typography>
            </Button>
            <Button onClick={() => setShowEditRequest(!showEditRequest)}>
            <Typography variant="h6">Edit</Typography>
            </Button>
            {showEditRequest ? (
              <EditRequests
                request={request}
                setRequests={setRequests}
                showEditRequest={showEditRequest}
                setShowEditRequest={setShowEditRequest}
                requests={requests}
              />
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserRequests;
