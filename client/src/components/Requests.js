import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Typography, Card, CardContent, CardMedia } from "@mui/material";
import UserRequests from "./UserRequests";
import { UserContext } from "../Context";

function Requests({ requests, setRequests }) {
  const user = useContext(UserContext);

  return (
    <div>
      <Card>
        <CardContent sx={{bgcolor: "#379148"}}>
          <Typography className="signin-logo" variant="h3" color="white">
            <strong>Your Requests</strong>
          </Typography>
          <Typography variant="h6" 
            sx={{
                margin: "auto",
              textAlign: "center",
              marginTop: "20px",
              width: "500px",
              color: "white"
            }}
          >
            Below are the requests that you have already made. Click on the link to make a new request.
          </Typography>
          <Typography align="center" padding="10px" variant="h5">
          <Link to={"/newrequest"}>New Request</Link>
        </Typography>
        </CardContent>
      </Card>
      <Grid item xs={6} padding="20px">
        
      </Grid>
      <Container maxWidth="md">
        <Grid item xs={12} sm={6} md={4}>
          <UserRequests
            requests={requests.filter(
              (request) => request.user_id === user.currentUser.id
            )}
            setRequests={setRequests}
          />
        </Grid>
      </Container>
    </div>
  );
}

export default Requests;

{
  /* <UserPosts
            posts = {posts.filter((post) => (post.user_id = user.currentUser.id))}
            /> */
}

// :name, :description, :images, :approved, :category, :hours_requested, :user_id, :organizer_id
