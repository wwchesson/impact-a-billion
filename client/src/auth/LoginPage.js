import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { CssBaseline, Typography, Card, CardContent } from "@mui/material"

function LoginPage({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);

    return(
       <CssBaseline>
            <Typography >Welcome to #impactABillion where you have the chance to change lives.</Typography>
        <br />
        <Card sx={{borderRadius: "16px",  border: 1, borderColor: "grey.500", }} id="user-card">
            <CardContent>
                {showLogin ? (
                    <>
                    <LoginForm onLogin={onLogin}/>
                     <br />
                        <p>Create an account &nbsp; <button onClick={() => setShowLogin(false)}> Sign up </button></p>
                    </>
                ) : (
                    <>
                    <SignupForm onLogin={onLogin} />
                    <br />
                    <p>
                    Already have an account? &nbsp;
                    <button onClick={() => setShowLogin(true)}>Log In</button>
                    </p>
                    </>
                )}
            </CardContent>
        </Card>
       </CssBaseline>
    )
}

export default LoginPage;