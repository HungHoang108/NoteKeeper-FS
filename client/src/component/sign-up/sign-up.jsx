import { useState, useContext } from "react";
import { UserContext } from "../../context/user/user.context";

import { createAuthUserWithEmailAndPassword } from "../../firebase/firebase";

const inputForm = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: ""
}

const SignUp = () => {
  const [formField, setFormField] = useState(inputForm);
  const {setCurrentUser} = useContext(UserContext)


const {displayName, email, password, confirmedPassword} = formField;

const handleChange = (event) =>{
    const {name, value} = event.target;
    
    setFormField((prev) =>{
        return {
            ...prev,
            [name]: value
        }
    })
}

const handleSubmit = async (event)=> {
  event.preventDefault()
  if (password !== confirmedPassword){
      alert("passwords do not match")
      return;
  }

  try {
      const {user} = await createAuthUserWithEmailAndPassword (email, password);
      setCurrentUser(user)
    
  }catch(error) {
      console.log(error)
  }

  setFormField({
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: ""
  })   
}

// const addTodo = async () => {
//     const data = await fetch(api_base + "/todo/new", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json" 
//         },
//         body: JSON.stringify({
//             title: newTodo
//         })
//     }).then(res => res.json());

//     setTodos([...todos, data]);
    
//     setNewTodo("");
// }


    return (
        <div className="sign-up-box">
            <h2>Sign up with your email and password</h2>
            <form>
              <label>display name</label>
              <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

              <label>Email</label>
              <input type="email" required onChange={handleChange} name="email" value={email}/>

              <label>password</label>
              <input type="password" required onChange={handleChange} name="password" value={password}/>

              <label>confirm password</label>
              <input type="password" required onChange={handleChange} name="confirmedPassword" value={confirmedPassword}/>
              
              <button onClick={handleSubmit} type="submit" >Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;