import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import UserRequests from "./UserRequests";
import { UserContext } from "../Context";

function Requests({ }) {
  const user = useContext(UserContext);

  return (
    <div>
        <Grid item xs={6}>
          <Link to={"/newpost"}>New Request</Link>
        </Grid>
      <Container maxWidth="md">
        <Grid item xs={12} sm={6} md={4}>
          {posts.map((post) => (
            <UserRequests
              key={post.id}
              posts={posts.filter(
                (post) => (post.user_id = user.currentUser.id)
              )}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Posts;


// :name, :description, :images, :approved, :category, :hours_requested, :user_id, :organizer_id