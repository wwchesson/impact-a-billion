import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Typography } from "@mui/material";
import UserRequests from "./UserRequests";
import { UserContext } from "../Context";

function Requests({ requests }) {
  const user = useContext(UserContext);

  return (
    <div>
        <Grid item xs={6} padding="20px">
            <Typography align="center" padding="10px">
                <Link to={"/newpost"}>New Request</Link>
            </Typography>
        </Grid>
      <Container maxWidth="md">
        <Grid item xs={12} sm={6} md={4}>
          {requests.map((request) => (
            <UserRequests
              key={request.id}
              requests={requests.filter(
                (request) => (request.user_id = user.currentUser.id)
              )}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Requests;


// :name, :description, :images, :approved, :category, :hours_requested, :user_id, :organizer_id