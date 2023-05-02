import React, { useEffect, useState, useContext } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { UserContext } from "../Context";

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
      <Typography
        justifyContent="center"
        display="flex"
        variant="h3"
        padding="10px"
        marginBottom="10px"
        color="
        #692567"
      >
        <strong>build community, impact lives</strong>
      </Typography>
      <br />
      <Typography justifyContent="center"
        display="flex"
        variant="h4"
        marginBotton="10px"
        color="#8f3801"
        >Welcome {user.currentUser.name}! </Typography>
      <br />
      {/* <Box sx={{ display: "flex", justifyContent: "center", margin: "auto"}}> */}
        <Grid container sx={{display: "flex", justifyContent: "center", margin: "auto"}}>
          <Grid item xs={12} md={6} margin="1rem">
            <Typography
              justifyContent="center"
              display="flex"
              variant="h6"
              padding="10px"
            >
              <strong>Stories</strong>
            </Typography>
            {posts.slice(0, 3).map((post) => (
              <Card key={post.id} className="impacter-cards">
                <CardMedia
                  component="img"
                  image={post.image}
                  height="250"
                ></CardMedia>
                <CardContent><strong>{post.caption}</strong></CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={5} margin="1rem">
            <Grid>
              <Typography
                justifyContent="center"
                display="flex"
                variant="h6"
                padding="10px"
              >
                <strong>Your Events</strong>
              </Typography>
              {myEvents.map((event) => (
                <Card key={event.id} className="impacter-cards">
                  <CardContent>
                    <Typography>{event.event_name}</Typography>
                    <Typography>{event.event_date}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <Grid>
              <Typography
                justifyContent="center"
                display="flex"
                variant="h6"
                padding="10px"
              >
                <strong>Carescapes</strong>
              </Typography>
              {carescapes.slice(0, 3).map((art) => (
                <Card key={art.id} className="impacter-cards">
                  <CardContent>
                    <Typography
                      justifyContent="center"
                      display="flex"
                      padding="10px"
                    >
                      {art.event_name}
                    </Typography>
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
      {/* </Box> */}
    </div>
  );
}

export default ImpacterFeed;
