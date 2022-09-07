import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Container, Button } from "@mui/material";
import UserPosts from "./UserPosts";
import { UserContext } from "../Context";

function Posts({ posts }) {
  const user = useContext(UserContext);

  return (
    <div>
        <Grid item xs={6}>
          <Link to={"/newpost"}>New Post</Link>
        </Grid>
      <Container maxWidth="md">
        <Grid item xs={12} sm={6} md={4}>
          {posts.map((post) => (
            <UserPosts
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
