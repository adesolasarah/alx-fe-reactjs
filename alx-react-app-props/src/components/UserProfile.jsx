import React from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const userData = React.useContext(UserContext);
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserProfile;
