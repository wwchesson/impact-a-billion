import React, {useState, useEffect} from "react"

function Carescapes () {
    const [carescapes, setCarescapes] = useState([])

    useEffect(() => {
        fetch("/carescapes")
        .then(r => r.json())
        .then((data) => setCarescapes(data))
    }, [])

    return (
        <div>Hello</div>
    )
}

export default Carescapes