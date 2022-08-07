import { signInWithGooglePopup } from '../../firebase/firebase'


const SignIN = () => {


    const logInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        
    }
  return (
    <div>SignIN

        <button onClick={logInWithGoogle}>Sign In with Google</button>
    </div>
    
  )
}

export default SignIN