import React, { useState, useContext } from "react";
import { UserContext } from "../Context";
import ImpacterFeed from "./ImpacterFeed";
import OrganizerHome from "../organizer_components/OrganizerHome";

function Home({ posts }) {
  const user = useContext(UserContext);
  const type = user.currentUser.type;

  const userType = () => {
    if (type === "Organizer") {
      return <OrganizerHome></OrganizerHome>;
    } else {
      return <ImpacterFeed posts={posts} ></ImpacterFeed>;
    }
  };

  return <div>{userType()}</div>;
}

export default Home;
