import React from "react";

import { useParams, Link } from "react-router-dom";
import {AppBar, Typography} from "@mui/material";

function NavBar() {
    const { id } = useParams();
    const singleUser = `/users/${id}`

    return (
        <div>
            <AppBar style={{ background: "#42234e", height: "4em", margin: "0em 0em em 0em" }}>
                <Link id="nav-link" to={singleUser} >Profile</Link>

            </AppBar>
        </div>
    )
}

export default NavBar;