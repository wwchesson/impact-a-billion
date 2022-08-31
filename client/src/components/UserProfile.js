import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const { id } = useParams;

    const [singleUser, setSingleUser] = useState([]);

    useEffect(() => {
        fetch(`/users/${id}`)
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            setSingleUser(data)
        })
    }, [id]);

    return (
        <div>
            <h2>{singleUser.skills}</h2>
        </div>
    );
}

export default UserProfile