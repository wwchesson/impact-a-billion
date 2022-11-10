import React from "react";
import { Typography } from "@mui/material";

function ProfileCard({ user }) {
  const { skills, availability, travel_radius, zip, token_points } = user;

  return (
    <div>
      <Typography id="user-info" variant="h5">
        Skills: {skills}
      </Typography>
      <Typography id="user-info" variant="h5">
        Availability: {availability}
      </Typography>
      <Typography id="user-info" variant="h5">
        Travel Radius: {travel_radius} miles
      </Typography>
      <Typography id="user-info" variant="h5">
        Points: {token_points}
      </Typography>
      <Typography id="user-info" variant="h5">
        Current Zip Code: {zip}
      </Typography>
    </div>
  );
}

export default ProfileCard;
