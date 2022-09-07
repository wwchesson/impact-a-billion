import { useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import NavBar from "./NavBar";
import Posts from "./Posts";
import LoginPage from "../auth/LoginPage"
import Home from "./Home"

function App() {
  const [currentUser, setCurrentUser] = useState(null);
    
    return (

      <div className="App">
        <NavBar />
         <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/users/:id" element={<UserProfile />}></Route>
          <Route path="/posts/:id" element={<Posts />}>
          </Route>
        </Routes>

       
      </div>
  );
}

export default App;