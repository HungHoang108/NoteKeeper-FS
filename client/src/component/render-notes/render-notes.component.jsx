
import { useState, useContext} from 'react'
import { UserContext } from '../../context/user/user.context';
import axios from 'axios';

const RenderNotes = () => {
    
  const { notes, userEmail, setNotes, setNoteId, setEditStatus} = useContext(UserContext)

  return (
		<div>
		{notes.map(existedNote => {
      setNoteId(existedNote._id)
			return existedNote.email === userEmail? (<div key={existedNote._id}>
				<h3>{existedNote.title}</h3>
				<p>{existedNote.content}</p>

        <button onClick={()=>{
               setEditStatus(true)
               console.log('edit set')

                // setNotes({
                //   title: notes[id].title,
                //   content: notes[id].content
                // })
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