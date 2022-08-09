import { useState, useContext, useEffect} from 'react'
import { UserContext } from '../../context/user/user.context';
import axios from 'axios';

import './create-note.styles.scss'

const api_base = 'http://localhost:9000';


const CreateNote = () => {
	const {userEmail, setNotes, notes, setNewNote, newNote} = useContext(UserContext)
	
	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = async (userToken) => {
		// fetch(api_base + '/todos')
		// 	.then(res => res.json())
		// 	.then(data => setTodos(data))
		// 	.catch((err) => console.error("Error: ", err));

      const response = await axios.get("http://localhost:9000/todos")
	  
      setNotes(response.data);
	}

	const handleChange = (event)=> {
		const {name, value} = event.target

		setNewNote((prev) => {
			return {
				...prev,
				[name]: value
			}
		})
	}

  const addNote = async (e) => {
	e.preventDefault()
		const data = await fetch(api_base + "/todo/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				user: userEmail,
				title: newNote.title,
				content: newNote.content
			})
		}).then(res => res.json());

		setNotes([...notes, data]);

		setNewNote("");
		
	}

  return (

        <div className="create-note-box">
			<form className='create-note-box-form'>
			<input placeholder="Title" name='title'  onChange={handleChange}  />
			<textarea rows="4" cols="50" placeholder="Note" name='content' onChange={handleChange} />
			<button className="create-note-button" onClick={addNote}>Add</button>

			</form>

		</div>

   
  )
}

export default CreateNote