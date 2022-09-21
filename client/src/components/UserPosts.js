import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import EditPosts from "./EditPosts";

function UserPosts({ posts, setPosts }) {
  const [showEditPosts, setShowEditPosts] = useState(false);

  function handlePostDeleteClick(id) {
    fetch(`/posts/${id}`, {
      method: "DELETE",
    }).then(() => setPosts(posts.filter((post) => post.id !== id)));
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      {posts.map((post) => (
        <Card key={post.id} style={{ margin: "5em 2em 2em 2em" }}>
          <CardMedia
            component="img"
            image={post.image}
            height="250"
          ></CardMedia>
          <CardContent>
            <Typography variant="h4">{post.caption}</Typography>
            <br />
            <Typography>
              {post.past_event_name} at {post.past_event_location} -{" "}
              {post.past_event_date}
            </Typography>
            <br />
            <Button onClick={() => setShowEditPosts(!showEditPosts)}>
              Edit
            </Button>
            {showEditPosts ? (
              <EditPosts
                setPosts={setPosts}
                post={post}
                setShowEditPosts={setShowEditPosts}
                showEditPosts={showEditPosts}
              />
            ) : null}

            <Button onClick={() => handlePostDeleteClick(post.id)}>
              Delete Post
            </Button>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}

export default UserPosts;
