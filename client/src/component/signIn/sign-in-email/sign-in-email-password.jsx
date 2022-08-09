import { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../../firebase/firebase";
import './sign-in-email.styles.scss'

const inputForm = {
    email: "",
    password: ""
}

const SignInWithEmailAndPassword = () => {
   
  const [formField, setFormField] = useState(inputForm);
  
    const { email, password} = formField;

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

    try {
        const {user} = await signInAuthUserWithEmailAndPassword(email, password);

    } catch (err){
        switch (err.code) {
            case 'auth/wrong-password':
                alert('incorrect password')
                break;
            case 'auth/user-not-found':
                alert('no user associated with the email')
                break;
            default:
                console.log(err)
        }
    }

    setFormField({
        email: "",
        password: ""
    })   
    }

    return (
        <div className="sign-in-box">
            <h5>Already Have An Account?</h5>
            <form className="sign-in-form">
              <input placeholder="Email" type="email" required onChange={handleChange} name="email" value={email}/>

              <input placeholder="Password" type="password" required onChange={handleChange} name="password" value={password}/>
            
            <div>
            <button onClick={handleSubmit} type="submit" >Sign In</button>
            </div>
              
            </form>
        </div>
    )
}

export default SignInWithEmailAndPassword;