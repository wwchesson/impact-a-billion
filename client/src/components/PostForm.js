import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { UserContext } from "../Context";

function PostForm({ posts, setPosts }) {
  //program submit function
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const userId = user.currentUser.id;
  const [userWithPosts, setUserWithPosts] = useState({ posts: [] });

  useEffect(() => {
    fetch(`/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUserWithPosts(data));
  }, [userId]);

  // console.log(userWithPosts)
  const pastEventInfo = posts.map((post) => (
   <div>
     <h4>{post.past_event_id}</h4>
    <h4>{post.past_event_name}</h4>
   </div>
   
  ))

  function handleAddNewPost(newPost) {
    const userCopy = { ...userWithPosts };
    userCopy.posts.push(newPost);
    // setUserWithPosts(userCopy);
    setPosts([...posts, newPost]);
  }

  //program form

  const [errors, setErrors] = useState([]);
  const [postFormData, setPostFormData] = useState({
    image: "",
    caption: "",
    past_event_id: 0
  });

  function handlePostInputChange(e) {
    setPostFormData({ ...postFormData, [e.target.name]: e.target.value });
  }

  function handlePostSubmit(e) {
    e.preventDefault();
    setErrors([]);
    const postData = { ...postFormData, user_id: userId };
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((r) => r.json())
      .then((newPost) => {
        handleAddNewPost(newPost);
        navigate("/posts");
      });
  }

  return (
    <form onSubmit={handlePostSubmit}>
      <Box
        sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-image-input"
          label="Image"
          autoComplete="off"
          type="text"
          name="image"
          value={postFormData.image}
          onChange={handlePostInputChange}
        />
        <br />
        <TextField
          id="outlined-caption-input"
          label="Caption"
          type="text"
          name="caption"
          autoComplete="off"
          value={postFormData.caption}
          onChange={handlePostInputChange}
        />
        <br />
        <FormControl
          sx={{
            width: "250px",
            marginLeft: "15px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <InputLabel>Past Event</InputLabel>
          <Select
            name="past_event_id"
            label="Past Event"
            value={postFormData.past_event_id}
            onChange={handlePostInputChange}
          >
            {posts.map((post) => (
              <MenuItem value={post.past_event_id}>{post.past_event_name}</MenuItem>
            ))}
 
          </Select>
        </FormControl>
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
  );
}

export default PostForm;
