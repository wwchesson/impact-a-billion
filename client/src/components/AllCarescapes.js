import React, { useEffect, useState} from "react"
import {Container, Grid, Card, CardMedia, CardContent, Typography} from "@mui/material"

function AllCarescapes() {
    const [allCarescapes, setAllCarescapes] = useState([])

    useEffect(() => {
        fetch("/carescapes")
        .then(r => r.json())
        .then((data) => setAllCarescapes(data))
    }, [])


    return(
        <Container maxWidth="md">
           <Grid item xs={12} sm={6} md={4}>
            {allCarescapes.map((carescape) => (
                <Card key={carescape.id} sx={{padding: "15px", marginTop: "30px", marginBottom: "30px"}}>
                    <CardMedia component="img"
                    image={carescape.image}
                    height="250"
                    ></CardMedia>
                    <CardContent>
                        <Typography variant="h6">{carescape.event_name} - {carescape.event_date} - {carescape.event_location}</Typography>
                    </CardContent>
                </Card>
            ))}
            </Grid> 
        </Container>
    )
}

export default AllCarescapes