import React, {useContext} from 'react'
import UserContext from '../UserContext'
import Home from './Home'
import Login from './Login'

export default function Main () {

    const {userInfo, setUserInfo} = useContext(UserContext)
    // console.log('ComponentA', userInfo)

    return (
        userInfo.lastLogIn ?
    
        <div >
          <Home/>
        </div>
        :
        <div>
          <Login/>
        </div>
      )
}
