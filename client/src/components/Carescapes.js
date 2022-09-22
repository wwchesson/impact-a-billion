import React, {useState, useEffect, useContext} from "react"
import {UserContext} from "../Context"
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Container
  } from "@mui/material";
  import CarescapeCard from "./CarescapeCard";

function Carescapes() {
    const user = useContext(UserContext)
    const userId = user.currentUser.id

    const [impacterPastEvent, setImpacterPastEvent] = useState([])

    useEffect(() => {
        fetch("/impacter_past_events")
        .then(r => r.json())
        .then((data) => {
            setImpacterPastEvent(data)
        })
    }, [])


    const myPastEvents = impacterPastEvent.filter((pastEvent) => pastEvent.user_id === userId)


    return(
        <div>
            <Typography className="signin-logo" variant="h3"><strong>Your Carescapes</strong></Typography>
           <Container maxWidth="md">
            <Grid container spacing={6}>
                {myPastEvents.map((myPastEvent) => (
                    <CarescapeCard key={myPastEvent.id} myPastEvent={myPastEvent}/>
                ))}

            </Grid>
        </Container> 
        </div>
        
    )
}

export default Carescapes