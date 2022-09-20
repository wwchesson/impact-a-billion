import React, { useContext } from "react";
import { UserContext } from "../Context";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import impactLogo from "../images/impactLogo.jpeg";

function NavBar() {
  const user = useContext(UserContext);
  // console.log(user)
  const userId = user.currentUser.id;
  const profile = `/users/${userId}`;
  const posts = `/posts/${userId}`;
  const requests = `/requests/${userId}`;

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        user.setCurrentUser(null);
      }
    });
  }

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
          <Link
            id="nav-link"
            style={{ color: "white", margin: "4em 4em", align: "right" }}
            to={"/home"}
          >
            Home
          </Link>
          <Link
            id="nav-link"
            style={{ color: "white", margin: "4em 4em", align: "right" }}
            to={"/events"}
          >Events
          </Link>
          <Link
            id="nav-link"
            style={{ color: "white", margin: "4em 4em", align: "right" }}
            to={profile}
          >
            Profile{" "}
          </Link>
          <Link
            id="nav-link"
            style={{ color: "white", margin: "4em 4em", align: "right" }}
            to={posts}
          >
            Posts
          </Link>
          <Link
            id="nav-link"
            style={{ color: "white", margin: "4em 4em", align: "right" }}
            to={requests}
          >
            Requests
          </Link>
          <Button style={{ color: "white", margin: "4em 4em", align: "right" }} onClick={handleLogoutClick}> Logout </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
