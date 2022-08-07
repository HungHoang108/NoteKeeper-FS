import {React, useState, useContext, useEffect} from 'react'
import { UserContext } from '../../context/user/user.context';
import axios from 'axios'

const api_base = 'http://localhost:9000';


const CreateNote = () => {
	const {userToken} = useContext(UserContext)
    const [notes, setNotes] = useState([]);
	

	const [newNote, setNewNote] = useState({
		title: "",
		content:"",
		user: userToken
	});
console.log(userToken)
	// useEffect(()=>{
		
		
	// 	if (currentUser) {
	// 		const userToken = currentUser.email
	// 		setToken(userToken)
	// 	}
	// 	console.log(token)
	// 	console.log('token')
	// }, [])

    useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = async () => {
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

  const addNote = async () => {
		const data = await fetch(api_base + "/todo/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				title: newNote.title,
				content: newNote.content
			})
		}).then(res => res.json());

		setNotes([...notes, data]);
		
		setNewNote("");
	}

  return (
    <div>
        <div className="content">
			<h2>Create tasks</h2>
			<div>
				<input type="text" name='title'  onChange={handleChange}  />
				<input type="text" name='content' onChange={handleChange} />
			</div>
			
			<div className="button" onClick={addNote}>Create Task</div>
		</div>
        
        {notes.map(note => {
            return (
              <div key={note._id}>{note.title}</div>
            )
          })}
    </div>
  )
}

export default CreateNote