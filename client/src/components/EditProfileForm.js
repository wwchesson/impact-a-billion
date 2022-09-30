import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, imageListItemClasses } from "@mui/material";
import { UserContext } from "../Context";

function EditProfileForm({ singleUser, setSingleUser, showEditForm, setShowEditForm }) {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const { skills, availability, zip, image, travel_radius } = singleUser;
  const userId = user.currentUser.id;
  const [errors, setErrors] = useState([]);
  const [profileFormData, setProfileFormData] = useState({
    skills: skills,
    availability: availability,
    zip: zip,
    image: image,
    travel_radius: travel_radius
  });

  function handleProfileInputChange(e) {
    setProfileFormData({ ...profileFormData, [e.target.name]: e.target.value });
  }

  function handleProfileFormSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch(`/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileFormData),
    })
      .then((r) => r.json())
      .then((data) => {
        setSingleUser(data);
        setShowEditForm(!showEditForm)
      });
  }

  return (
    <form onSubmit={handleProfileFormSubmit}>
      <Box
        sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
         <TextField
          id="outlined-image-input"
          label="Profile Picture"
          autoComplete="off"
          name="image"
          value={profileFormData.image}
          onChange={handleProfileInputChange}
        />
        <br />
        <TextField
          id="outlined-skills-input"
          label="Skills"
          autoComplete="off"
          name="skills"
          value={profileFormData.skills}
          onChange={handleProfileInputChange}
        />
        <br />
        <TextField
          id="outlined-availability-input"
          label="Availability"
          autoComplete="off"
          name="availability"
          value={profileFormData.availability}
          onChange={handleProfileInputChange}
        />
        <br />
        <TextField
          id="outlined-radius-input"
          label="Travel Radius"
          autoComplete="off"
          name="travel_radius"
          value={profileFormData.travel_radius}
          onChange={handleProfileInputChange}
        />
        <br />
        <TextField
          id="outlined-zip-input"
          label="Zip Code"
          autoComplete="off"
          name="zip"
          value={profileFormData.zip}
          onChange={handleProfileInputChange}
        />
        <br />
        <Button type="submit">
          <Typography id="profile-submit" variant="h6">
            Update Profile
          </Typography>
        </Button>
        {errors.map((err) => (
          <h4 key={err}>{err}</h4>
        ))}
      </Box>
    </form>
  );
}

export default EditProfileForm;
