import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { CssBaseline, Typography, Card, CardMedia, CardContent } from "@mui/material";
import impactLogo from "../images/impactLogo.jpeg";

function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <CssBaseline>
      <Typography  padding="20px"
        justifyContent="center"
        display="flex"
        variant="h4"
        marginBottom="5px">
     build community, impact lives.
      </Typography>
      <br />
      {/* <Card>
        <CardMedia
        component="img"
        image={impactLogo}
        height="100"
        >

        </CardMedia>
      </Card> */}
      <img alt="logo" src={impactLogo} className="signin-logo"/>
      <br />
      <Card
        sx={{
          borderRadius: "16px",
          border: 1,
          borderColor: "grey.500",
          margin: "auto",
          width: 500,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardContent>
          {showLogin ? (
            <>
              <LoginForm onLogin={onLogin} />
              <br />
              <p>
                Create an account &nbsp;{" "}
                <button onClick={() => setShowLogin(false)}> Sign up </button>
              </p>
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
  );
}

export default LoginPage;
