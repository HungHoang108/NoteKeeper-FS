import { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../firebase/firebase";

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
        <div className="sign-up-box">
            <h2>Sign in with your email and password</h2>
            <form>

              <label>Email</label>
              <input type="email" required onChange={handleChange} name="email" value={email}/>

              <label>password</label>
              <input type="password" required onChange={handleChange} name="password" value={password}/>
              
              <button onClick={handleSubmit} type="submit" >Sign In</button>
            </form>
        </div>
    )
}

export default SignInWithEmailAndPassword;