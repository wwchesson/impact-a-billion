import React, {useState, useEffect} from "react"

function PastEvents ({pastEvents}) {

   

    return (
        <div>
            {pastEvents.map((event) => (
                <h4 key={event.id}>{event.name}</h4>
            ))}
        </div>
    )
}

export default PastEvents;