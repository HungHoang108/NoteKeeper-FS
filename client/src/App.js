import { useContext } from 'react';

import Authentication from './component/authentication/authentication';
import { UserContext } from './context/user/user.context';
import { signOutUser } from './firebase/firebase';
import CreateNote from './component/create-note/create-note.component';
import RenderNotes from './component/render-notes/render-notes.component';
import EditNote from './component/edit-note/edit-note.component';
import SearchBar from './component/search-bar/search-bar.component';

import './App.css';

function App() {
	const {currentUser, editStatus, searchStatus} = useContext(UserContext)

	const haddleSignOut = async ()=>{
		await signOutUser()
	}

  return (
    <div className="App">
			{currentUser ? (<div>
				<div className='app-header'>
					
					<button className='sign-out-button' onClick={haddleSignOut}>SIGN OUT</button>
					<SearchBar/>
				</div>

				{editStatus ? <EditNote/> : <CreateNote/>}
				
				<RenderNotes/>
				
			</div>) : <Authentication/>}
    </div>
  );
}

export default App;
