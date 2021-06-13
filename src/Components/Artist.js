import React, {useState , useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Loading from '../Loading';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const Artist = ({match}) => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState(false);
    const id = match.params.id;
    const [msg,setMsg]=useState('');
    useEffect(async ()=>{
        fetchItem();
    },[]);

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#2e7d32',
            },
            secondary: {
                main: '#d81b60',
            },
        },
    });

    const fetchItem = async () => {
        try{
            const url=`https://www.breakingbadapi.com/api/characters/${id}`;
            const data = await fetch(url);
            console.log('failed object',data);
            const res= await data.json();
            console.log(res);
            setCharacter(res[0]);
            setLoading(false);
        }
        catch(e){
            setError(true);
            setMsg(''+e);
            console.log('the message is ',e.message);
        }
        
    }
    if(error){
        return (
            <div style={{color:'white',fontSize:'30px'}}>
                {msg}
            </div>
        )
    }

    if(loading){
        return(
            <Loading height='100vh' />
        )
    }
    const page=`https://www.google.com/search?q='${character.portrayed}'`;
    return (
        <div className='ArtistWrapper'>
            <div className='ArtistContent'>
                <div className='ArtistContentLeft'>
                    <div className="ArtistContentLeftDetailes">
                        <h1>
                            {character.name}
                            
                        </h1>
                        <div className='occupation'>
                            {character.occupation.map((item)=>(
                                <h3>{item}</h3>
                            ))}
                        </div>
                            
                        <h2>Portrayed by : <a href={page} style={{textDecoration:'none',color:'rgb(173, 190, 223)'}}>{character.portrayed}</a></h2>
                        <h2>Nickname : {character.nickname}</h2>
                        <div className='appearance'>
                            <h2>Appearance : </h2>
                            <div className="appearanceDiv">
                                {
                                    character.appearance.map((item)=>(
                                        <div>{item}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="bottomDiv">
                        <Link to='/' style={{textDecoration:'none',color:'rgb(173, 190, 223)'}}>
                            <ThemeProvider theme={theme}>
                                <Button color='primary' variant='contained' >
                                    Back
                                </Button>
                            </ThemeProvider>
                        </Link>
                    </div>
                </div>
                <div className="ArtistContentRight">
                    <a href={page}>
                        <img src={character.img} className='ArtistContentRightImage'  />
                        <div className="overLayArtist"></div>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Artist;
