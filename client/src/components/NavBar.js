import React, {useContext} from "react";
import {UserContext} from "../Context"
import {  Link } from "react-router-dom";
import {AppBar, Typography} from "@mui/material";

function NavBar() {
    const user = useContext(UserContext)
    const profile = `/users/${user.id}`
    const posts = `/posts/${user.id}`

    return (
        <div>
            <AppBar style={{ background: "#42234e", height: "4em", margin: "0em 0em em 0em" }}>
                <Link id="nav-link" to={profile} >Profile </Link>
                <Link id="nav-link" to={posts}>Posts</Link>
            </AppBar>
        </div>
    )
}

export default NavBar;