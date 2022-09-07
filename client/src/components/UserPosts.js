import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@mui/material"

function UserPosts({posts}) {

    

    return (
        <div>
         {posts.map((post) => (
          <Card key={post.id}>
            <CardMedia
                component="img"
                image={post.image}
                height="250"
            >
            </CardMedia>
            <CardContent>
                <Typography variant="h4">
                    {post.caption}
                </Typography>
                
            </CardContent>
        </Card>  
        ))
        }   
        </div>
        
    )
}



export default UserPosts;