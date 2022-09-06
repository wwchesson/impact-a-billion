import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import {Card, Grid, CardContent, Typography} from "@mui/material"
import UserPosts from "./UserPosts"
import { UserContext } from "./Context"

function Posts() {
    const [posts, setPosts] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch("/posts")
        .then(r => r.json())
        .then((data) => {
            // console.log(data);
            setPosts(data);
        })
    }, [])


    
    return (
        <>
        <Grid>
            {posts.map((post) => (
                <UserPosts 
                key={post.id} 
                // post={posts.filter((post) => post.user_id = user.id)} 
                
                />
                

            ))}
        </Grid>
            

            
        </>
    )
}

export default Posts;