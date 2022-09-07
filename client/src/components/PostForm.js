import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";

function PostForm() {
    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");
    const [errors, setErrors] = useState([]);

// onSubmit={handleSubmit}
    return(
        <form  >
         <Box
          sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-image-input"
            label="Image"
            autoComplete="off"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-caption-input"
            label="Caption"
            type="text"
            autoComplete="off"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <br />
  
          <Button type="submit">
            <Typography id="signup-submit" variant="h5">
              Create Post
            </Typography>
          </Button>
          {errors.map((err) => (
            <h4 key={err}>{err}</h4>
          ))}
          
        </Box>
      </form> 

    )
}

export default PostForm;




// function SignupForm({ onLogin }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [zip, setZip] = useState("")
//     const [errors, setErrors] = useState([]);
//     const navigate = useNavigate();

//   function handleSubmit(e) {
//     e.preventDefault();
//     setErrors([]);
//     fetch("/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password, password_confirmation: passwordConfirmation, name, email, zip }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => {
//           console.log(user);
//           onLogin(user);
//         });
//         // navigate("/");
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit} >
//         <Box
//           sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" } }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField
//             id="outlined-username-input"
//             label="Username"
//             autoComplete="off"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <br />
//           <TextField
//             id="outlined-password-input"
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <TextField
//             id="outlined-password-confirmation-input"
//             label="Password Confirmation"
//             type="password"
//             autoComplete="current-password"
//             value={passwordConfirmation}
//             onChange={(e) => setPasswordConfirmation(e.target.value)}
//           />
//           <br />
//           <TextField
//             id="outlined-name-input"
//             label="Name"
//             type="text"
//             autoComplete="off"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />
//           <TextField
//             id="outlined-email-input"
//             label="Email"
//             type="text"
//             autoComplete="off"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <TextField
//             id="outlined-zip-input"
//             label="Zip Code"
//             type="text"
//             autoComplete="off"
//             value={zip}
//             onChange={(e) => setZip(e.target.value)}
//           />
//           <br />
//           <Button type="submit">
//             <Typography id="signup-submit" variant="h5">
//               Sign Up
//             </Typography>
//           </Button>
//           {errors.map((err) => (
//             <h4 key={err}>{err}</h4>
//           ))}
          
//         </Box>
//       </form> 

//   );
// }