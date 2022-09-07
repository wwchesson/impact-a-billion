import React, {useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";
import { UserContext } from "../Context"

function PostForm({onAddPost}) {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    // const [user, setUser] = useState({ posts: [] });

    function handleAddNewPost(newPost) {
        const userCopy = {...user};
        userCopy.posts.push(newPost);

    }


    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");
    const [errors, setErrors] = useState([]);

    function handlePostSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({image, caption})
        })
        .then((r) => r.json())
        .then((newPost) =>  {
            onAddPost(newPost);
            navigate(`/posts/${user.id}`)
        });
    }

    return(
        <form  onSubmit={handlePostSubmit}>
         <Box
          sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-image-input"
            label="Image"
            autoComplete="off"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-caption-input"
            label="Caption"
            type="text"
            autoComplete="off"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <br />
  
          <Button type="submit">
            <Typography id="signup-submit" variant="h5">
              Create Post
            </Typography>
          </Button>
          {errors.map((err) => (
            <h4 key={err}>{err}</h4>
          ))}
        </Box>
      </form> 

    )
}

export default PostForm;



