import React, {useMemo} from "react"
import { Grid, Paper, Card, CardMedia, CardContent } from "@mui/material"

function ImpacterFeed({feedImages, posts}) {
 
const randomImage1 = feedImages[Math.floor(Math.random() * feedImages.length)];
const randomImage2 = feedImages[Math.floor(Math.random() * feedImages.length)];
const randomImage3 = feedImages[Math.floor(Math.random() * feedImages.length)];

    return (
        <div>
            <Grid item md={8}>
                <Card>
                    <CardMedia
                    component="img"
                    image={randomImage1}
                    height="250"
                    >
                    </CardMedia>
                    <br/>
                    <CardMedia
                    component="img"
                    image={randomImage2}
                    height="250"
                    >
                    </CardMedia>
                    <br/>
                    <CardMedia
                    component="img"
                    image={randomImage3}
                    height="250"
                    >
                    </CardMedia>
                </Card>
            </Grid>
            <Grid item md={4}>
                <h4>Events</h4>
            </Grid>
        </div>
    )
}

export default ImpacterFeed;
