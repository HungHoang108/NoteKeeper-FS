import {useState, useContext} from 'react'
import { UserContext } from '../../context/user/user.context'
import './edit-note.styles.scss'
import axios from 'axios'

const EditNote = () => {
  const {setEditStatus, editId, newNote} = useContext(UserContext)
  const [editNote, setEditNote] = useState("")

  const handleEdit = (event)=> {
		const {name, value} = event.target

		setEditNote((prev) => {
			return {
				...prev,
				[name]: value
			}
		})
	}

  const submitEdit = async (e) => {
    e.preventDefault()
    setEditStatus(false)
   const updateNote = await axios.patch(`http://localhost:9000/update/${editId}`, { 
      title: editNote.title,
      content: editNote.content
    })
  }

  return (
    <form className='edit-note-form'>
        <input placeholder="Edit title" name='title'  onChange={handleEdit} value={newNote.title} />
        <textarea rows="3" placeholder="Edit your note..." name='content' onChange={handleEdit} value={newNote.content}/>
        <button onClick={submitEdit}>Done</button>
    </form>
  )
}

export default EditNote