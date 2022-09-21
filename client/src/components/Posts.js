import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Typography } from "@mui/material";
import UserPosts from "./UserPosts";
import { UserContext } from "../Context";

function Posts({ posts, setPosts }) {
  const user = useContext(UserContext);

  return (
    <div>
        <Grid item xs={6}>
          <Link to={"/newpost"} className="">
          <Typography align="center" padding="20px" variant="h5">New Post </Typography>
            </Link>
        </Grid>
        <br />
      <Container maxWidth="md">
            <UserPosts
            posts = {posts.filter((post) => (post.user_id === user.currentUser.id))}
            setPosts={setPosts}
            />
      </Container>
    </div>
  );
}

export default Posts;
