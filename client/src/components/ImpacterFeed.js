import React, {useMemo} from "react"
import { Grid, Paper, Card, CardMedia, CardContent } from "@mui/material"

function ImpacterFeed({feedImages, posts}) {
 

 

   console.log(posts)
    // const RenderRandomPost = (feedImages) => {
    //     const randomValue = useMemo(() => Math.random(), [])
    //     return feedImages[Math.floor(randomValue * feedImages.length)]
    // }

    return (
        <div>
            <Grid item md={8}>
                {/* {RenderRandomPost()} */}
            </Grid>
            <Grid item md={4}>
                
            </Grid>
        </div>
    )
}

export default ImpacterFeed;
