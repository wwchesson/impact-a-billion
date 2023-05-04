import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Card, CardContent } from "@mui/material";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          // console.log(user);
          onLogin(user);
        });
        navigate("/home");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-username-input"
          label="Username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button type="submit">
          <Typography id="signup-submit" variant="h5">
            Log In
          </Typography>
        </Button>
        <Card
          sx={{
            borderRadius: "16px",
            border: 1,
            borderColor: "grey.500",
            margin: "",
            width: 200,
            display: "flex",
            justifyContent: "left",
            marginTop: "30px",
            bgcolor: "#f5d38c"
          }}
        >
          <CardContent>
          <Typography color="#014652"><strong>Mock organizer login</strong></Typography>
          <Typography>un: iwells; pw: iwells</Typography>
          <Typography color="#014652"><strong>Mock impacter login</strong></Typography>
          <Typography>un: dday; pw: dday</Typography>
          </CardContent>

        </Card>

        {errors.map((err) => (
          <h4 key={err}>{err}</h4>
        ))}
      </Box>
    </form>
  );
}

export default LoginForm;
