import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function AllPosts({ posts }) {
  return (
    <Container maxWidth="md">
      <Grid container sx={{pl: "50px", marginTop: "10px"}} >
        <Grid item xs={12} sm={6} md={4}>
          {posts.map((post) => (
            <Card
              key={post.id}
              sx={{ width: "700px", marginTop: "30px", marginBottom: "30px" }}
            >
              <CardMedia
                component="img"
                image={post.image}
                height="250"
              ></CardMedia>
              <CardContent>
                <Typography variant="h6">{post.caption}</Typography>
                <br />
                <Typography><strong>{post.past_event_name} at {post.past_event_location} - {post.past_event_date}</strong></Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AllPosts;
