import React from "react";
import {Card, CardContent, CardMedia} from "@mui/material"

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
                I love America
            </CardContent>
        </Card>  
        ))
        }   
        </div>
        
    )
}



export default UserPosts;