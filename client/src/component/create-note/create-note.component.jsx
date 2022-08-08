import { useState, useContext, useEffect} from 'react'
import { UserContext } from '../../context/user/user.context';
import axios from 'axios';


const api_base = 'http://localhost:9000';


const CreateNote = () => {
	const {userEmail, setNotes, notes} = useContext(UserContext)
	
	const [newNote, setNewNote] = useState({
		
		content:""
	
	});

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

  const addNote = async () => {
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

        <div className="content">
			<h2>Create tasks</h2>
			<div>
				<input placeholder="Write title" name='title'  onChange={handleChange}  />
				<input  placeholder="Write content" name='content' onChange={handleChange} />
			</div>
			
			<div className="button" onClick={addNote}>Create Task</div>

		</div>

   
  )
}

export default CreateNote