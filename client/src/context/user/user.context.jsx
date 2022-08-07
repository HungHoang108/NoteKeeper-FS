import {React, useState, createContext, useEffect} from 'react'
import { onAuthStateChangedListener } from '../../firebase/firebase';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userToken, setUserToken] = useState(null);
    
    const value = {currentUser, setCurrentUser, userToken};
    

    useEffect(()=>{
        onAuthStateChangedListener((user)=>{

            setUserToken( `${user && user.accessToken}`)
            setCurrentUser(user)
        })
    }, [])

    
    

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
  
}
