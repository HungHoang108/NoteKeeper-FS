import { useContext } from 'react';

import Authentication from './component/authentication/authentication';
import { UserContext } from './context/user/user.context';
import { signOutUser } from './firebase/firebase';
import CreateNote from './component/create-note/create-note.component';

import './App.css';
import { async } from '@firebase/util';

function App() {
	const {currentUser} = useContext(UserContext)

	const haddleSignOut = async ()=>{
		await signOutUser()
	}

  return (
    <div className="App">
			{currentUser ? <button onClick={haddleSignOut}>SIGN OUT</button> : <Authentication/>}
			<CreateNote/>  
    </div>
  );
}

export default App;
