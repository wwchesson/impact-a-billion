import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, CssBaseline, Avatar, Box, IconButton, Button, Grid } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

function UserProfile() {
    const { id } = useParams();
    
    const [singleUser, setSingleUser] = useState([]);

    useEffect(() => {
        fetch(`/users/${id}`)
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            setSingleUser(data)
        })
    }, [id]);

    const { name, skills, availability, travel_radius, token_points} = singleUser; 

    return (
        <div>
            <CssBaseline>
                <Box className="user-profile" justifyContent="center" alignItems="center" display="flex" padding="10px">
                    <Avatar alt={singleUser.name} src={singleUser.image}  sx={{marginTop: 10, width: 200, height: 200 }}></Avatar>
                </Box>
                <Typography variant="h3" padding="10px" justifyContent="center" display="flex">{name}</Typography>
                <br></br>
                <Card sx={{borderRadius: "16px",  border: 1, borderColor: "grey.500", }} id="user-card">
                    <CardContent  >
                        <Typography id="user-info"  variant="h5">
                            Skills: {skills}  <IconButton id="edit-icon"><EditIcon ></EditIcon>  </IconButton>              
                        </Typography>
                        <Typography id="user-info" variant="h5">
                            Availability: {availability} <IconButton id="edit-icon"><EditIcon ></EditIcon>  </IconButton>
                        </Typography>
                        <Typography id="user-info" variant="h5">
                            Travel Radius: {travel_radius} miles <IconButton id="edit-icon" ><EditIcon ></EditIcon>  </IconButton>
                        </Typography>
                        <Typography id="user-info" variant="h5">
                            Points: {token_points} 
                        </Typography>
                        <Button>
                           <Typography id="user-info" variant="h5">
                            Become an Organizer 
                        </Typography> 
                        </Button>
                        
                    </CardContent>
                    
                </Card>    
      
                
                
            </CssBaseline>
            
        </div>
    );
}

export default UserProfile