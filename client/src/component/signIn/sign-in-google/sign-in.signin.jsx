import { signInWithGooglePopup } from '../../../firebase/firebase'
import './sign-in-google.styles.scss'

const SignIN = () => {

    const logInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
    }
  return (
    <div>
        <button className='google-sign-in-button' onClick={logInWithGoogle}>Sign In with Google</button>
    </div>
    
  )
}

export default SignIN