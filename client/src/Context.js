import React, { createContext, useState, useEffect } from "react";
import LoginPage from "./auth/LoginPage"

const UserContext = createContext()

function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    
    // auto-login
    useEffect(() => {
      fetch("/me").then((r) => {
        if(r.ok) {
          r.json().then((currentUser) => setCurrentUser(currentUser))
        }
      });
    }, []);
  
    if (!currentUser) return <LoginPage onLogin={setCurrentUser} />;
    
    const value = currentUser

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }