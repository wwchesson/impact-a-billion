import React from "react"

function EventImpacters({eventImpacters}) {

    const impacterNames = eventImpacters.map((name) => <h4 key={name}>{name}</h4>)

    return (
        <div>{impacterNames}</div>
    )
}

export default EventImpacters;