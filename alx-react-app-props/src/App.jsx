import ProfilePage from "./components/ProfilePage";
import UserContext from "./UserContext";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  const userData = {name: "Jane Doe", email: "jane.doe@example.com"}

  return (
    <>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <div>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
    </>
  );
}

export default App;
