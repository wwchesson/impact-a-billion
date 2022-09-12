import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

function UserPosts({ posts }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      {posts.map((post) => (
        <Card key={post.id} style={{margin: "5em 2em 2em 2em"}}>
          <CardMedia
            component="img"
            image={post.image}
            height="250"
          ></CardMedia>
          <CardContent>
            <Typography variant="h4">{post.caption}</Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}

export default UserPosts;
