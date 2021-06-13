import React, { useContext , useState,useEffect} from 'react';
import {CharacterContext } from '../CharacterContext';
import Loading from '../Loading';
import CharacterItem from './CharacterItem';

function CharacterList() {
    const {error,loading,setLoading,characters,setCharacters} = useContext(CharacterContext);

    console.log("ikkada", characters, loading);
    console.log(error);
    if(error!=='false'){
        return (
            <div style={{
                width:'100%',
                height:'100vh',
                color:'red',
                fontSize:'30px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
                }}>
                {error}
            </div>
        )
    }
    if(loading){
        return(
            <Loading height='40vh' />
        )
    }

    if(characters.length==0  ){
        return (
            <div style={gridStyle}>
                <h1 style={{color:'red'}}> No matching results found</h1>
            </div>
        )
    }
    console.log('ikkadiki vsthundu',characters.length);
    
    return (
        <div style={gridStyle}>
            {  
                characters.map( character =>(
                    <CharacterItem key={character.char_id} character={character}/>
                ))
            }
        </div>
    )
}

const gridStyle={
    display:'grid',
    gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))',
    gridGap:'20px',
    position:'relative',
    top:'-1vh',
    marginBottom:'2vh'
    // border:'5px solid red'
}
export default CharacterList
