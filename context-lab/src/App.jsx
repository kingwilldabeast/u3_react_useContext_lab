import './App.css'
import { useState, useContext } from 'react'
import UserContext  from './UserContext'
import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'
import Login from './components/Login'


export default function App() {

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    lastLogIn: ''
  })



  return (
    <>  
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      <Header/>
      <Main/>
      {/* <Home/>
      <Login/> */}
    </UserContext.Provider >
    </>
  )
}

 
