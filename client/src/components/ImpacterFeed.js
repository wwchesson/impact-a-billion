import React, { useEffect, useState, useContext } from "react";
import {
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import { UserContext } from "../Context";
import impactLogo from "../images/impactLogo.jpeg";

function ImpacterFeed({ posts }) {
  const user = useContext(UserContext);
  const userId = user.currentUser.id;
  const [impacterEvents, setImpacterEvents] = useState([]);
  const [carescapes, setCarescapes] = useState([]);

  useEffect(() => {
    fetch("/carescapes")
      .then((r) => r.json())
      .then((data) => {
        setCarescapes(data);
        // console.log(data)
      });
  }, []);

  useEffect(() => {
    fetch("/impacter_events")
      .then((r) => r.json())
      .then((data) => {
        setImpacterEvents(data);
        // console.log(data);
      });
  }, []);

  const myEvents = impacterEvents.filter(
    (event) => event.impacter_id === userId
  );

  return (
    <div>
      {/* <img alt="logo" src={impactLogo}/> */}
      <Typography justifyContent="center" display="flex" variant="h3">change a life, change your own</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={3} sm={5} md={6}>
            <Typography>
              <strong>Stories</strong>
            </Typography>
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
              <Typography>
                <strong>Your Events</strong>
              </Typography>
              {myEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent>
                    <Typography>{event.event_name}</Typography>
                    <Typography>{event.event_date}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <Grid>
              <Typography>
                <strong>Carescapes</strong>
              </Typography>
              {carescapes.map((art) => (
                <Card key={art.id}>
                  <CardContent>
                    <Typography>{art.event_name}</Typography>
                    <CardMedia
                      component="img"
                      image={art.image}
                      height="250"
                    ></CardMedia>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ImpacterFeed;
