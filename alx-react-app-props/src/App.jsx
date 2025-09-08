// import { useState } from "react";
import UserContext from "./UserContext";
import ProfilePage from "./components/ProfilePage";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
