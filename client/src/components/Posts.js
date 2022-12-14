import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import UserPosts from "./UserPosts";
import { UserContext } from "../Context";

function Posts({ posts, setPosts, myPastEvents }) {
  const user = useContext(UserContext);

  return (
    <div>
      <Card>
        <CardContent sx={{ bgcolor: "#379148" }}>
          <Typography className="signin-logo" variant="h3" color="white">
            <strong>Posts</strong>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              margin: "auto",
              textAlign: "center",
              marginTop: "20px",
              width: "550px",
              color: "white",
            }}
          >
            Once you have completed an event, this is where you can show how you
            made an impact on your community.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {myPastEvents.length === 0 ? (
              <Typography
                sx={{ marginTop: "20px", marginRight: "50px" }}
                variant="h5"
              >
                Make a New Post
              </Typography>
            ) : (
              <Link to={"/newpost"} className="">
                <Typography
                  sx={{ marginTop: "20px", marginRight: "50px" }}
                  variant="h5"
                >
                  Make a New Post{" "}
                </Typography>
              </Link>
            )}

            <Link to={"/allposts"} className="">
              <Typography sx={{ marginTop: "20px" }} variant="h5">
                See All Posts{" "}
              </Typography>
            </Link>
          </Box>
        </CardContent>
      </Card>
      <Grid item xs={6}></Grid>
      <br />
      <Container maxWidth="md">
        <UserPosts
          posts={posts.filter((post) => post.user_id === user.currentUser.id)}
          setPosts={setPosts}
        />
      </Container>
    </div>
  );
}

export default Posts;
