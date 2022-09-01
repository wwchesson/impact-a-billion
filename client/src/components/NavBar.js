import React from "react";
import { Link } from "react-router-dom";
import {AppBar, Typography} from "@mui/material";

function NavBar() {
    return (
        <div>
            <AppBar style={{ background: "#42234e", height: "4em", margin: "0em 0em em 0em" }}>
                <Typography>Hello</Typography>
            </AppBar>
        </div>
    )
}

export default NavBar;