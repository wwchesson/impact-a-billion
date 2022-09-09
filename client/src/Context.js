import React, { createContext, useState, useEffect } from "react";
import LoginPage from "./auth/LoginPage"

const UserContext = createContext()

function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    
    // auto-login
    useEffect(() => {
      fetch("/me").then((r) => {
        if(r.ok) {
          r.json().then((currentUser) => {
            console.log(currentUser);
            setCurrentUser(currentUser)
          })
        }
      });
    }, []);
  
    if (!currentUser) return <LoginPage onLogin={setCurrentUser} />;
    

    return(
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }