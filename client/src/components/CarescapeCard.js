import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
} from "@mui/material"

function CarescapeCard({myPastEvent}) {
const {carescape_image, past_event_name, past_event_location, past_event_date} = myPastEvent

    return(
        <Grid item xs={3} sm={4} md={6}>
            <Card className="carescapes">
                <CardMedia component="img" image={carescape_image} height="300">
            </CardMedia>
            <CardContent>
                <Typography>{past_event_name} - {past_event_location} - {past_event_date}</Typography>
            </CardContent>
            </Card>
            

        </Grid>
)}

export default CarescapeCard