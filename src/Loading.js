import React from 'react'
import loader from './images/spinner.gif';

const Loading = (props) => {
    const divStyle={
        width:'100%',
        height:`${props.height}`,
        color:'red',
        fontSize:'30px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    return (
        <div style={divStyle}>
                <img src={loader} alt="Lading..." />
        </div>
    )
}

export default Loading
