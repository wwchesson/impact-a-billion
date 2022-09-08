import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@mui/material"

function UserRequests({requests}) {
    
    
    

    return (
        <div>
         {requests.map((request) => (
            

          <Card key={request.id}>
             <CardContent >
                <Typography align="center">
                    <strong>{request.name} </strong> 
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image={request.images}
                height="250"
            >
            </CardMedia>
            <CardContent>
                <Typography><strong>Description:</strong> {request.description} </Typography>
                <Typography><strong>Status:</strong> {request.approved ? "Approved!" : "Still pending"}</Typography>
            </CardContent>
        </Card>  
        ))
        }   
        </div>
        
    )
}


export default UserRequests;