import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import UserProfile from "./UserProfile";

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  return (

      <div className="App">
        <Switch>
          
          <Route path="/users/:id" element={<UserProfile />}>

          </Route>
        </Switch>
      </div>
  );
}

export default App;