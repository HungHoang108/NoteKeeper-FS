import { useState, useContext } from "react";
import { UserContext } from "../../context/user/user.context";

import { createAuthUserWithEmailAndPassword } from "../../firebase/firebase";
import './sign-up.styles.scss'


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


    return (
        <div className="sign-up-box">
            <h5>Sign up with email and password</h5>
            <form className="sign-up-form">
              
              <input placeholder="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

              
              <input placeholder="Email" type="email" required onChange={handleChange} name="email" value={email}/>

              
              <input placeholder="Password" type="password" required onChange={handleChange} name="password" value={password}/>

              
              <input placeholder="Confirm Password" type="password" required onChange={handleChange} name="confirmedPassword" value={confirmedPassword}/>
              <div>
                 <button className="sign-up-button" onClick={handleSubmit} type="submit" >Sign Up</button>
              </div>
              
            </form>
        </div>
    )
}

export default SignUp;