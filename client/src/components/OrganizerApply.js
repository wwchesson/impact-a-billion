import React, { useContext, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { UserContext } from "../Context";

function OrganizerApply() {
  const user = useContext(UserContext);

  return (
    <Box
      sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, width: "600px"}}
      noValidate
      autoComplete="off"
    >

          <Typography>
            As an organizer, how do you believe that you can contribute to impactABillion's goals of building community and impacting lives?
        </Typography>
      <TextField></TextField>  
        
        
    </Box>
  );
}

export default OrganizerApply;


