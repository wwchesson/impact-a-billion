import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext()

function UserProvider({children}) {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("/users")
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            setUsers(data)
        })
    }, [])

    const value = [users, setUsers]

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }