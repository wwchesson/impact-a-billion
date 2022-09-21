import React, { useContext } from "react";
import { UserContext } from "../Context";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import impactLogo from "../images/impactLogo.jpeg";

function NavBar() {
  const user = useContext(UserContext);
  const userId = user.currentUser.id;
  const profile = `/users/${userId}`;

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        user.setCurrentUser(null);
      }
    });
  }

  const style = {
    color: "white",
    display: "flex",
    margin: "3em 3em",
    align: "right",
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{
          background: "#42234e",
          height: "5em",
          margin: "0em 0em 1em 0em",
        }}
      >
        <Toolbar>
          <img alt="logo" src={impactLogo} />
          <Link style={style} to={"/home"}>
            Home
          </Link>
          <Link style={style} to={"/events"}>
            Events
          </Link>
          <Link style={style} to={profile}>
            Profile
          </Link>
          <Link style={style} to={"/posts"}>
            Posts
          </Link>
          <Link style={style} to={"/requests"}>
            Requests
          </Link>
          <Button style={style} onClick={handleLogoutClick}>
            {" "}
            Logout{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
