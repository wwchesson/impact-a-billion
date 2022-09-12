import React, {useMemo} from "react"
import { Grid, Paper, Card, CardMedia, CardContent } from "@mui/material"

function ImpacterFeed({ posts}) {
 
    return (
        <div>
            <Grid item md={8}>
                   {posts.slice(0, 3).map((post) => (
                    <Card key={post.id}>
                        <CardMedia
                        component="img"
                        image={post.image}
                        height="250"
                        >
                        </CardMedia>
                        <CardContent>
                            {post.caption}
                        </CardContent>
                    </Card>
                   ))}
            </Grid>
            <Grid item md={4}>
                <h4>Events</h4>
            </Grid>
        </div>
    )
}

export default ImpacterFeed;
