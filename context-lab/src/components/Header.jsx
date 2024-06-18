import React, {useContext} from 'react'
import UserContext from '../UserContext'
import Login from './Login'

export default function Header () {

    const {userInfo, setUserInfo} = useContext(UserContext)
    // console.log('ComponentA', userInfo)

    return (
        <div >
            <h2>Header</h2>


                {/* <p>{userInfo.username}</p>
                <p>{userInfo.lastLogIn}</p> */}

            
            {/* <Login/> */}
        </div>

    )
}