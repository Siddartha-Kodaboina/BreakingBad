import React,{ useContext } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const CharacterItem = (props) => {
    
    const character=props.character;
    return (
        <div className='itemImageContainer'>
            <Link to={`/${character.char_id}`}> 
                <img src={character.img} className='itemImage'  />
                <div className="overLay"></div>
            </Link>
        </div>
    )
}

export default CharacterItem
