import React, { useContext } from "react";
import  UserContext from "../UserContext";


export default function Home() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const handleLogout = (e) => {
    setUserInfo({  username: "", password: "", lastLogIn: ''})
  }
  
  return (

    <div >
      <h2>Welcome back {userInfo.username}</h2>
      <h3>You logged in at {userInfo.lastLogIn}</h3>
      <button onClick={handleLogout}>Logout</button>

    </div>

  )
    }
