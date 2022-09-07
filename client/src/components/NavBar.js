import React, {useContext} from "react";
import {UserContext} from "../Context"
import {  Link } from "react-router-dom";
import {AppBar, Typography} from "@mui/material";

function NavBar() {
    const user = useContext(UserContext)
    const userId = user.currentUser.id
    const profile = `/users/${userId}`
    const posts = `/posts/${userId}`

    return (
        <div>
            <AppBar position="static" style={{ background: "#42234e", height: "4em", margin: "0em 0em 1em 0em" }}>
                <Link id="nav-link" to={profile} >Profile </Link>
                <Link id="nav-link" to={posts}>Posts</Link>
            </AppBar>
        </div>
    )
}

export default NavBar;