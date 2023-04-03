import React, { useContext } from "react";
import { UserContext } from "../Context";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Card,
  CardMedia,
} from "@mui/material";
import impactLogo from "../images/impactLogo.jpeg";

function NavBar() {
  const user = useContext(UserContext);
  const userId = user.currentUser.id;
  const profile = `/this-user/${userId}`;
  const sxNav = { flexGrow: 1, display: "flex" }

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        user.setCurrentUser(null);
      }
    });
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <AppBar
        position="static"
        style={{
          background: "#42234e",
          height: "5em",
        }}
      >
        <Toolbar>
          <Card sx={{ margin: "5px" }}>
            <CardMedia
              component="img"
              image={impactLogo}
              sx={ sxNav }
            ></CardMedia>
          </Card>
          <Typography sx={{ flexGrow: 1, display: "flex", marginLeft: "20px" }}>
            <Link to="/home" style={{ color: "white" }}>
              Home
            </Link>{" "}
          </Typography>

          <Typography sx={ sxNav }>
            <Link to="/gallery" style={{ color: "white" }}>
              Carescapes
            </Link>
          </Typography>

          <Typography sx={ sxNav }>
            <Link to="/browse-events" style={{ color: "white" }}>
              Events
            </Link>
          </Typography>

          <Typography sx={ sxNav }>
            <Link to={profile} style={{ color: "white" }}>
              Profile
            </Link>
          </Typography>

          <Typography sx={ sxNav }>
            <Link to="/myposts" style={{ color: "white" }}>
              Posts
            </Link>
          </Typography>

          <Typography sx={ sxNav }>
            <Link to="/myrequests" style={{ color: "white" }}>
              Requests
            </Link>
          </Typography>

          <Button
            sx={{ flexGrow: 1, display: "flex", marginLeft: "-20px" }}
            style={{ color: "white" }}
            onClick={handleLogoutClick}
          >
            Logout{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
