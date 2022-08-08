import {useState, useContext} from 'react'
import { UserContext } from '../../context/user/user.context'

const EditNote = () => {
  const {setEditStatus} = useContext(UserContext)
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

  const submitEdit = () => {
    setEditStatus(false)
    console.log('work')
  }

  return (
    <div className="content">
      <h2>Create tasks</h2>
      <div>
        <input placeholder="Edit title" name='title'  onChange={handleEdit}  />
        <input placeholder="Edit your note..." name='content' onChange={handleEdit} />
      </div>
      
      <button onClick={submitEdit}>Edit note</button>
      

    </div>
  )
}

export default EditNote