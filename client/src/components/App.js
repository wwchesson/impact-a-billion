import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import NavBar from "./NavBar";
import Posts from "./Posts";
import LoginPage from "../auth/LoginPage";
import Home from "./Home";
import PostForm from "./PostForm";
import Requests from "./Requests";
import RequestForm from "./RequestForm";
import BrowseEvents from "./BrowseEvents";
import Carescapes from "./Carescapes";

function App() {
  const [posts, setPosts] = useState([]);
  const [requests, setRequests] = useState([]);
  const [impacterEvents, setImpacterEvents] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);

  useEffect(() => {
    fetch("/requests")
      .then((r) => r.json())
      .then((data) => {
        setRequests(data);
      });
  }, []);

  useEffect(() => {
    fetch("/impacter_events")
      .then((r) => r.json())
      .then((data) => {
        setImpacterEvents(data);
        // console.log(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch("/past_events")
  //     .then((r) => r.json())
  //     .then((data) => setPastEvents(data));
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route
          path="/home"
          element={<Home posts={posts} impacterEvents={impacterEvents} />}
        ></Route>
        <Route path="/users/:id" element={<UserProfile />}></Route>
        <Route path="/posts" element={<Posts posts={posts} setPosts={setPosts}/>}></Route>
        <Route
          path="/newpost"
          element={<PostForm posts={posts} setPosts={setPosts} />}
        ></Route>
        <Route
          path="/requests"
          element={<Requests requests={requests} setRequests={setRequests}/>}
        ></Route>
        <Route
          path="/newrequest"
          element={
            <RequestForm requests={requests} setRequests={setRequests} />
          }
        ></Route>
        <Route
          path="/events"
          element={<BrowseEvents  />}
        ></Route>
        <Route
        path="/gallery"
        element={<Carescapes />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
