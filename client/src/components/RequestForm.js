import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, InputLabel, MenuItem, FormControl } from "@mui/material";
import { UserContext } from "../Context";
import Select, { SelectChangeEvent } from '@mui/material/Select';

function RequestForm({ requests, setRequests }) {
  //program submit function
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const userId = user.currentUser.id;
  const [userWithRequests, setUserWithRequests] = useState({ requests: [] });

  useEffect(() => {
    fetch(`/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUserWithRequests(data));
  }, [userId]);

  function handleAddNewRequest(newRequest) {
    const userCopy = { ...userWithRequests };
    userCopy.requests.push(newRequest);
    setUserWithRequests(userCopy);
    setRequests([...requests, newRequest]);
  }

  //program form
  const [errors, setErrors] = useState([]);
//   const [category, setCategory] = useState("");
//   const [hoursRequested, setHoursRequested] = useState("");
  const [requestFormData, setRequestFormData] = useState({
    name: "",
    description: "",
    images: "",
    category: "",
    hours_requested: "",
  });

  function handleRequestInputChange(e) {
    setRequestFormData({ ...requestFormData, [e.target.name]: e.target.value });
  }

  function handleRequestSubmit(e) {
    e.preventDefault();
    setErrors([]);
    const requestData = { ...requestFormData, user_id: userId };
    fetch("/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((r) => r.json())
      .then((newRequest) => {
        handleAddNewRequest(newRequest);
        navigate(`/requests/${userId}`);
      });
  }
  // :name, :description, :images, :approved, :category, :hours_requested, :user_id, :organizer_id
  return (
    <form onSubmit={handleRequestSubmit}>
      <Box
        sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name-input"
          label="Name"
          autoComplete="off"
          type="text"
          name="name"
          value={requestFormData.name}
          onChange={handleRequestInputChange}
        />
        <br />
        <TextField
          id="outlined-description-input"
          label="Description"
          type="text"
          name="description"
          autoComplete="off"
          value={requestFormData.description}
          onChange={handleRequestInputChange}
        />
        <br />
        <TextField
          id="outlined-images-input"
          label="Image"
          type="text"
          name="image"
          autoComplete="off"
          value={requestFormData.images}
          onChange={handleRequestInputChange}
        />
        <br />
        <FormControl sx={{width: "250px", marginLeft: "15px", marginTop: "5px", marginBottom: "5px"}} >
            <InputLabel>Category</InputLabel>
            <Select
                value={requestFormData.category}
                onChange={handleRequestInputChange}
            >
                <MenuItem value={"Beautification"}>Beautification</MenuItem>
            </Select>

        </FormControl>
        <br />
        <FormControl sx={{width: "250px", marginLeft: "15px", marginTop: "15px", marginBottom: "15px"}} >
            <InputLabel>Hours Requested</InputLabel>
            <Select
                value={requestFormData.hours_requested}
                onChange={handleRequestInputChange}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
        </FormControl>
        <br />
        <Button type="submit">
          <Typography id="signup-submit" variant="h5">
            Create Request
          </Typography>
        </Button>
        {errors.map((err) => (
          <h4 key={err}>{err}</h4>
        ))}
      </Box>
    </form>
  );
}

export default RequestForm;
