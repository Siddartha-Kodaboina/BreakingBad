import React, { createContext , useState , useEffect ,useContext} from 'react'
import { SearchContext } from './SearchContext';


export const CharacterContext = createContext();

export const CharacterProvider = ( props ) => {
    const [characters, setCharacters] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('false');
    const [text,setText] = useContext(SearchContext); 

    

    useEffect(async () => {
        const fetchData= async () =>{
            try{
                var url=`https://www.breakingbadapi.com/api/Characters`;
                if(text!=='') url+='?name='+text;
                const responce= await fetch(url);
                const res = await responce.json();
                setCharacters(res);
                // console.log(characters);
                setLoading(false);
                
            }
            catch(err){
                console.log('the message is ',err.message);
                setError(''+err);
            }
        }
        fetchData();
        
    }, [text]);
    // 
    console.log(text);
    return (
        <CharacterContext.Provider value={{error,loading,setLoading,characters,setCharacters}}>
            {props.children}
        </CharacterContext.Provider>
    )
}
