import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CssBaseline,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import EditProfileForm from "./EditProfileForm";
import ProfileCard from "./ProfileCard";

function UserProfile() {
  const { id } = useParams();
  const [showEditForm, setShowEditForm] = useState(false);
  const [singleUser, setSingleUser] = useState([]);

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setSingleUser(data);
      });
  }, [id]);

  return (
    <div>
      <CssBaseline>
        <Box
          className="user-profile"
          justifyContent="center"
          alignItems="center"
          display="flex"
          padding="10px"
        >
          <Avatar
            alt={singleUser.name}
            src={singleUser.image}
            sx={{ marginTop: 10, width: 200, height: 200 }}
          ></Avatar>
        </Box>
        <Typography
          variant="h3"
          padding="10px"
          justifyContent="center"
          display="flex"
        >
          {singleUser.name}
        </Typography>
        <br></br>
        <Card
          sx={{
            borderRadius: "16px",
            border: 1,
            borderColor: "grey.500",
            display: "flex",
          }}
          id="user-card"
        >
          <CardContent>
            {showEditForm ? (
              <EditProfileForm
                singleUser={singleUser}
                setSingleUser={setSingleUser}
                showEditForm={showEditForm}
                setShowEditForm={setShowEditForm}
              />
            ) : (
              <ProfileCard user={singleUser} />
            )}
            <Button
              sx={{ padding: "10px", marginBottom: "10px" }}
              onClick={() => setShowEditForm(!showEditForm)}
            >
              <Typography variant="h6">Edit Profile</Typography>
            </Button>
          </CardContent>
        </Card>
      </CssBaseline>
    </div>
  );
}

export default UserProfile;
