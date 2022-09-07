import React, { useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import NavBar from "./NavBar";
import Posts from "./Posts";
import LoginPage from "../auth/LoginPage"
import Home from "./Home"
import PostForm from "./PostForm"

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);

  function handleAddNewPost(newPost) {
    setPosts([...posts, newPost]);
  }  

    return (
      <div className="App">
        <NavBar />
         <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/users/:id" element={<UserProfile />}></Route>
          <Route path="/posts/:id" element={<Posts posts={posts}/>}></Route>
          <Route path="/newpost" element={<PostForm onAddPost={handleAddNewPost}/>}></Route>
        </Routes>

       
      </div>
  );
}

export default App;