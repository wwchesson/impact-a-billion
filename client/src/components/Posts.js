import React, {useState, useEffect, useContext} from "react";
import { Grid, Container, Button} from "@mui/material"
import UserPosts from "./UserPosts"
import { UserContext } from "../Context"

function Posts() {
    const user = useContext(UserContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/posts")
        .then(r => r.json())
        .then((data) => {
            // console.log(data);
            setPosts(data);
        })
    }, [])


    
    return (
        <div>
        <Grid container spacing={2}>
            <Grid item xs={6}> 
               <Button>New Post</Button> 
            </Grid>
            <Grid item xs={6}> 
               <Button>New Request</Button> 
            </Grid>
        </Grid>
        <Container maxWidth="md">
        <Grid item xs={12} sm={6} md={4}>
            {posts.map((post) => (
                <UserPosts 
                key={post.id} 
                posts={posts.filter((post) => post.user_id = user.id)} 
                
                />
                

            ))}
        </Grid>
        </Container>
        </div>

            

    )
}

export default Posts;