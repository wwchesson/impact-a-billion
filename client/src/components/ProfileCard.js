import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import OrganizerApply from "./OrganizerApply";

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
      <Link to="/organizer-application">
        <Typography variant="h5">Become an Organizer</Typography>
      </Link>
    </div>
  );
}

export default ProfileCard;
