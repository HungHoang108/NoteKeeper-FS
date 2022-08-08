import {React, useState, createContext, useEffect} from 'react'
import { onAuthStateChangedListener } from '../../firebase/firebase';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [notes, setNotes] = useState([]);
    const [noteId, setNoteId] = useState(null);
    const [editStatus, setEditStatus] = useState(false)
    
    const value = {currentUser, setCurrentUser, userEmail, setNotes, notes,
        setNoteId, noteId, editStatus, setEditStatus};

    useEffect(()=>{
        onAuthStateChangedListener((user)=>{
            
            setUserEmail( `${user && user.email}`)
            setCurrentUser(user)
        })
    }, [])

    
    

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
  
}
