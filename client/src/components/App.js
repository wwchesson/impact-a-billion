import { useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import NavBar from "./NavBar";
import Posts from "./Posts"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setUsers(data)
      })
  }, []);

  return (

      <div className="App">
          <NavBar />
         <Routes>
          
          <Route path="/users/:id" element={<UserProfile />}></Route>
          <Route path="/posts/:id" element={<Posts />}>
          </Route>
        </Routes>

       
      </div>
  );
}

export default App;