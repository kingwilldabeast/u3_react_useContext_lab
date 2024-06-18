import React, { useState, useContext } from "react";
import  UserContext from "../UserContext";


export default function Login() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [newUserInfo, setNewUserInfo] = useState({
    username: "",
    password: "",
    lastLogIn: ''
  })

const handleLogin = (e) => {
  e.preventDefault()
  setUserInfo({username: newUserInfo.username, lastLogIn: new Date().toString()})
  setNewUserInfo({ username: "", password: ""})
}

const handleTyping = (e) => {
  setNewUserInfo({ ...newUserInfo, [e.target.name]: e.target.value })
}

console.log(userInfo)

  return (
    <div className="">

      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          name="username"
          placeholder="username"
          type="text"
          value = {newUserInfo.username}
          onChange={handleTyping}
          required
        />

        <input
          name="password"
          placeholder="password"
          type="password"
          value = {newUserInfo.password}
          onChange={handleTyping}
          required
        />
  
        <button>Submit</button>
      </form>

    </div>
  )
    }
