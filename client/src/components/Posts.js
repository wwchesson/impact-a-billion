import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import UserPosts from "./UserPosts";
import { UserContext } from "../Context";

function Posts({ posts, setPosts }) {
  const user = useContext(UserContext);

  return (
    <div>
        <Grid item xs={6}>
          <Link to={"/newpost"}>New Post</Link>
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
