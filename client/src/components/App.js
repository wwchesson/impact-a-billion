import React from "react";
import {  Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import NavBar from "./NavBar";
import Posts from "./Posts";
import LoginPage from "../auth/LoginPage"
import Home from "./Home"
import PostForm from "./PostForm"

function App() {
    
    return (

      <div className="App">
        <NavBar />
         <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/users/:id" element={<UserProfile />}></Route>
          <Route path="/posts/:id" element={<Posts />}></Route>
          <Route path="/newpost" element={<PostForm />}></Route>
        </Routes>

       
      </div>
  );
}

export default App;