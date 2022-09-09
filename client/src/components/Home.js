import React, {useContext} from "react";
import {UserContext } from "../Context";

function Home() {
    const user = useContext(UserContext);
    console.log(user.currentUser.type)
    
    

    return(
        <>
        <h4>This is working</h4>
        </>
    )
}

export default Home;