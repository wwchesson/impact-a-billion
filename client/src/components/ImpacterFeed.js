import React, { useEffect, useState, useContext } from "react";
import { Grid, Paper, Card, CardMedia, CardContent, Box, Typography } from "@mui/material";
import { UserContext } from "../Context";

function ImpacterFeed({ posts }) {
    const user = useContext(UserContext)
    const [events, setEvents] = useState([])
    // const [impacterEvents, setImpacterEvents] = useState([])
    
    useEffect(() => {
        fetch("/events")
        .then(r => r.json())
        .then((data) => setEvents(data))
    }, [])

    useEffect(() => {
        fetch("/")
    }, [])

// const myEvents = events.filter((event) => event.impacters)
// console.log(myEvents)

// const impacterEvents = myEvents.map((event) => {
//     if (event[0].id === user.currentUser.id) {
//         return <Typography key={event.id}>{event.name}</Typography>
//     } else {
//         return <Typography key={event.id}>You have no events</Typography>
//     }
// })
    

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
                {/* {impacterEvents} */}
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
