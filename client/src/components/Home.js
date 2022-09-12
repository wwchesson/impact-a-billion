import React, {useState, useContext} from "react";
import {UserContext } from "../Context";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import ImpacterFeed from "./ImpacterFeed"
import OrganizerHome from "./OrganizerHome"

function Home({posts}) {
    const user = useContext(UserContext);
    const type = user.currentUser.type
    
    const userType = () =>  {
        if (type === "Organizer") {
            return <OrganizerHome></OrganizerHome>;
        } else {
            return <ImpacterFeed feedImages = {posts.map((post) => (post.image))} posts={posts}></ImpacterFeed>;
        }
    }

      return(
        <Grid container>
            {userType()}
        </Grid>
    )
}

export default Home;