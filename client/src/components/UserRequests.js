import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function UserRequests({ requests }) {

  const approved = requests.map((request) => {
    if (request.approved === "pending") {
      return <Typography> <strong>Status:</strong> Still pending</Typography>;
    } else if (request.approved === "approved") {
      return <Typography> <strong>Status:</strong> Approved! </Typography>;
    } else {
      return <Typography> <strong>Status:</strong> Sorry this request was denied </Typography>;
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
              <strong>Description:</strong> {request.description}{" "}
            </Typography>
            <br />
            {approved}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserRequests;
