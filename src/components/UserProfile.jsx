import { useContext } from "react";
import {UserContext} from "./UserContext.jsx";

const UserProfile = () => {
  const {user} = useContext(UserContext);

  return (
    <div>
      <h1>My Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  )
}

export default UserProfile;
