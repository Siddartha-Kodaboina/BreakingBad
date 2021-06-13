import React,{useContext} from 'react'
import img from './images/logo.png';
import './App.css';
import {CharacterContext } from './CharacterContext';

const Logo = () => {
    const {error,loading,setLoading,characters,setCharacters} = useContext(CharacterContext);
    if(error!=='false'){
        return (
            <>
            </>
        )
    } 
    return (
        <div className='logoStyle'>
            <img src={img} alt="logo" />
        </div>
    )
}

export default Logo
