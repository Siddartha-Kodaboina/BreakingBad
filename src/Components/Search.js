import React,{useContext} from 'react'
import { SearchContext } from '../SearchContext';
import {CharacterContext } from '../CharacterContext';

const Search = () => {
    const [text, setText] = useContext(SearchContext);
    const {error,loading,setLoading,characters,setCharacters} = useContext(CharacterContext);
    const handleChange=(e)=>{
        setText(e.target.value);
    }
    if(error!=='false'){
        return (
            <>
            </>
        )
    }
    return (
        <div className='search'>
            <form>
                <input 
                    type="text" 
                    value={text}
                    onChange={handleChange}
                    placeholder='search character'
                    autoFocus
                />
            </form>
        </div>
    )
}

export default Search
