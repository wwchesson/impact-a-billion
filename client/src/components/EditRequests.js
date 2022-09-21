import React, { useState } from "react";
import { Box, TextField, Button, Typography, FormControl, MenuItem, InputLabel } from "@mui/material";
import Select from '@mui/material/Select';

function EditRequests({
  request,
  setRequests,
  showEditRequest,
  setShowEditRequest,
}) {
  const {
    id,
    name,
    image,
    description,
    category,
    hours_requested,
    frequency,
    volunteers_needed,
  } = request;
  const [errors, setErrors] = useState([]);
  const [editRequestFormData, setEditRequestFormData] = useState({
    name: name,
    image: image,
    description: description,
    category: category,
    hours_requested: hours_requested,
    frequency: frequency,
    volunteers_needed: volunteers_needed,
  });

  function handleEditRequestFormChange(e) {
    setEditRequestFormData({
      ...editRequestFormData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form>
      <Box
        sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name-input"
          label="Name"
          autoComplete="off"
          name="name"
          value={editRequestFormData.name}
          onChange={handleEditRequestFormChange}
        />
        <br />
        <TextField
          id="outlined-image-input"
          label="Image"
          autoComplete="off"
          name="Image"
          value={editRequestFormData.image}
          onChange={handleEditRequestFormChange}
        />
        <br />
        <TextField
          id="outlined-description-input"
          label="Description"
          autoComplete="off"
          name="description"
          value={editRequestFormData.description}
          onChange={handleEditRequestFormChange}
        />
        <br />
        <TextField
          id="outlined-category-input"
          label="Category"
          autoComplete="off"
          name="category"
          value={editRequestFormData.category}
          onChange={handleEditRequestFormChange}
        />
        <br />
        <TextField
          id="outlined-hrs-input"
          label="Hours Requested"
          autoComplete="off"
          name="hours_requested"
          value={editRequestFormData.hours_requested}
          onChange={handleEditRequestFormChange}
        />
        <br />
        <FormControl sx={{width: "250px", marginLeft: "15px", marginTop: "5px", marginBottom: "5px"}} >
            <InputLabel>Category</InputLabel>
            <Select
                name="category"
                value={editRequestFormData.category}
                onChange={handleEditRequestFormChange}
            > 
                <MenuItem value={"AgroEcology"}>AgroEcology</MenuItem>
                <MenuItem value={"Backpack Prep"}>Backpack Prep</MenuItem>
                <MenuItem value={"Construction"}>Construction</MenuItem>
                <MenuItem value={"Donation Organization"}>Donation Organization</MenuItem>
                <MenuItem value={"Environmental Restoration"}>Environmental Restoration</MenuItem>
                <MenuItem value={"Hospice Care"}>Hospice Care</MenuItem>
                <MenuItem value={"Life Skills Instruction"}>Life Skills Instruction</MenuItem>
                <MenuItem value={"Meal Share"}>Meal Share</MenuItem>
                <MenuItem value={"Mentoring"}>Mentoring</MenuItem>
                <MenuItem value={"Reforestation"}>Reforestation</MenuItem>
                <MenuItem value={"Youth Program"}>Youth Program</MenuItem>
            </Select>

        </FormControl>
        <br />
        <FormControl sx={{width: "250px", marginLeft: "15px", marginTop: "15px", marginBottom: "15px"}} >
            <InputLabel>Hours Requested</InputLabel>
            <Select
                name="hours_requested"
                value={editRequestFormData.hours_requested}
                onChange={handleEditRequestFormChange}
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

export default EditRequests;
