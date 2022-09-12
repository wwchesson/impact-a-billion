import React, { useMemo } from "react";
import { Grid, Paper, Card, CardMedia, CardContent, Box } from "@mui/material";

function ImpacterFeed({ posts }) {
  return (
    <Box sx={{flexGrow: 1}}>
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={3} sm={5} md={6}>
        {posts.slice(0, 3).map((post) => (
        <Card key={post.id}>
            <CardMedia
              component="img"
              image={post.image}
              height="250"
            ></CardMedia>
            <CardContent>{post.caption}</CardContent>
          </Card>
        ))}
      </Grid>
      <Grid item xs={1} sm={3} md={6}>
            <h4>Events</h4>
      </Grid>

            </Grid>
    </Box>


     
  );
}

export default ImpacterFeed;
