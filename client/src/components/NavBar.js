import React, {useContext} from "react";
import {UserContext} from "../Context"
import {  Link } from "react-router-dom";
import {AppBar, Toolbar, Tabs, Tab, Typography} from "@mui/material";

function NavBar() {
    const user = useContext(UserContext)
    // console.log(user)
    const userId = user.currentUser.id
    const profile = `/users/${userId}`
    const posts = `/posts/${userId}`
    const requests = `/requests/${userId}`

    return (
        <div>
            <AppBar position="static" style={{ background: "#42234e", height: "4em", margin: "0em 0em 1em 0em" }}>
                <Toolbar>

                    <Link id="nav-link" style={{ color: "white", margin: "5em 5em", align: "right" }} to={profile} >Profile </Link>
                    <Link id="nav-link" style={{ color: "white", margin: "5em 5em", align: "right" }} to={posts}>Posts</Link>
                    <Link id="nav-link" style={{ color: "white", margin: "5em 5em", align: "right" }} to={requests}>Requests</Link> 
                </Toolbar>
                
               
            </AppBar>
        </div>
    )
}

export default NavBar;