import React, { useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import NavBar from "./NavBar";
import Posts from "./Posts";
import LoginPage from "../auth/LoginPage"
import Home from "./Home"
import PostForm from "./PostForm"
import Requests from "./Requests"
import RequestForm from "./RequestForm"

function App() {
  const [posts, setPosts] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);

  console.log(posts)

  useEffect(() => {
    fetch("/requests")
    .then(r => r.json())
    .then((data) => {
      setRequests(data)
    }
    )
  }, [])

  

    return (
      <div className="App">
        <NavBar />
         <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/users/:id" element={<UserProfile />}></Route>
          <Route path="/posts/:id" element={<Posts posts={posts} />}></Route>
          <Route path="/newpost" element={<PostForm posts={posts} setPosts={setPosts}/>}></Route>
          <Route path="/requests/:id" element={<Requests requests={requests}/>}></Route>
        <Route path="/newrequest" element={<RequestForm requests={requests} setRequests={setRequests}/>}></Route>
        </Routes>
        

       
      </div>
  );
}

export default App;