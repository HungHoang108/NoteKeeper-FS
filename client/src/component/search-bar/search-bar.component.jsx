import {useContext} from 'react'
import { SearchContext } from '../../context/note-filter/note-filter.context'

const SearchBar = () => {
    const {setSearchStatus, setNoteFilterArray, noteFilterArray, noteOfEachUser} = useContext(SearchContext)

    const searchHandler = (event) => {
        setSearchStatus(true)
        const searchKeyword = event.target.value
        console.log(noteOfEachUser)
        // const filteredArray= noteOfEachUser.filter((note)=>{
        //     return note.content.toLowerCase().includes(searchKeyword)
        //   })
        //   console.log(filteredArray)
        //   setNoteFilterArray(filteredArray)
    }
  return (
    <div>
        <input name='query' placeholder='Search for notes' onChange={searchHandler} />
    </div>
  )
}

export default SearchBar