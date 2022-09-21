import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  imageListItemClasses,
} from "@mui/material";

function EditPosts({ setPosts, post, showEditPosts, setShowEditPosts }) {
  const { id, image, caption } = post;
  const [errors, setErrors] = useState([]);
  const [editPostFormData, setEditPostFormData] = useState({
    image: image,
    caption: caption
  })

  function handleEditPostFormChange(e) {
    setEditPostFormData({...post, [e.target.name]: e.target.value})
  }


function handleEditPostSubmit(e) {
    e.preventDefault(); 
    setErrors([]);
    fetch(`/posts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editPostFormData)
    })
    .then(r => r.json())
    .then((data) => {
       setPosts(data);
       setShowEditPosts(!showEditPosts)
    })
}


  return (
    <form onSubmit={handleEditPostSubmit}>
    <Box
      sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
       <TextField
        id="outlined-image-input"
        label="Image"
        autoComplete="off"
        name="image"
        value={editPostFormData.image}
        onChange={handleEditPostFormChange}
      />
      <br />
      <TextField
        id="outlined-caption-input"
        label="Caption"
        autoComplete="off"
        name="caption"
        value={editPostFormData.caption}
        onChange={handleEditPostFormChange}
      />
      <br />
     
      <Button type="submit">
        <Typography id="profile-submit" variant="h6">
          Update Post
        </Typography>
      </Button>
      {errors.map((err) => (
        <h4 key={err}>{err}</h4>
      ))}
    </Box>
  </form>
  )
}

export default EditPosts;



