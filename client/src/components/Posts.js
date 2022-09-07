import React, {useState, useEffect, useContext} from "react";
import { Grid, Container} from "@mui/material"
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
            

            

    )
}

export default Posts;