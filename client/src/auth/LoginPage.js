import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {
  CssBaseline,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container
} from "@mui/material";
import impactLogo from "../images/impactLogo.jpeg";

function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ bgcolor: "#157a8c" }}>
        <CardMedia>
          <img alt="logo" src={impactLogo} className="signin-logo" />
        </CardMedia>
        <CardContent
          sx={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <Typography
            padding="20px"
            justifyContent="center"
            display="flex"
            variant="h5"
            color="#c9cfd1"
          >
            <strong>
              impactABillion is a forum for building community through service
              projects. By reaching out to those around us and responding to
              their needs, anyone can make an impact.
            </strong>

            <br />
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card
        sx={{
          borderRadius: "16px",
          border: 4,
          borderColor: "grey.500",
          margin: "1rem",
          maxWidth: "sm",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {showLogin ? (
            <>
              <LoginForm onLogin={onLogin} />
              <br />

              <Button onClick={() => setShowLogin(false)}>
                <Typography variant="h5">create an account</Typography>
              </Button>
              <br />
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                variant="h6"
                color="#060f78"
              >
               Become an organizer:
                <a href="mailto: willchesson@gmail.com">Contact Will</a>
              </Typography>
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
    </Container>
  );
}

export default LoginPage;
