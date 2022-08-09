
import {useContext} from 'react'
import { UserContext } from '../../context/user/user.context';
import './render-notes.styles.scss'
import axios from 'axios';

const RenderNotes = () => {
    
  const { notes, userEmail, setNotes, setNoteId, setEditStatus, setEditId} = useContext(UserContext)

  return (
		<div>
		{notes.map(existedNote => {
      setNoteId(existedNote._id)
			return existedNote.email === userEmail? (<div className='note' key={existedNote._id}>
				<h1>{existedNote.title}</h1>
				<p>{existedNote.content}</p>

        <button onClick={()=>{
               setEditStatus(true)
               setEditId(existedNote._id)

        }}>Update</button>

        <button onClick={async ()=>{
                window.location.reload(false);
                const remove = await axios.delete(`http://localhost:9000/delete/${existedNote._id}`)
                .then(()=> {
                setNotes(notes.map((oneNote) => {
                  return oneNote._id !== existedNote._id ? oneNote : null
                }))
              });
              
        }}>Delete</button>
			</div>) : null
      }) }
		</div>

  )
}

export default RenderNotes