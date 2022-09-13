import React, { useEffect, useState, useContext } from "react";
import { Grid, Paper, Card, CardMedia, CardContent, Box, Typography } from "@mui/material";
import { UserContext } from "../Context";

function ImpacterFeed({ posts }) {
    const user = useContext(UserContext)
    const userId = user.currentUser.id
    const [impacterEvents, setImpacterEvents] = useState([])    

    useEffect(() => {
        fetch("/impacter_events")
        .then(r => r.json())
        .then((data) => {
            setImpacterEvents(data);
            // console.log(data);
        })
    }, [])

    const myEvents = impacterEvents.filter((event) => (event.impacter_id === userId))
    const eventDisplay = myEvents.map((event) => (
        event.event_name
    ))
    console.log(eventDisplay)
 
    

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
            <Grid>
               <h4>Events</h4> 
                {/* {myEvents} */}
            </Grid>
            <Grid>
                <h4>Hello</h4>
            </Grid>
      </Grid>

            </Grid>
    </Box>


     
  );
}

export default ImpacterFeed;
