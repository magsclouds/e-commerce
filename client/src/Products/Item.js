import React from 'react';

export default (props) => {
    
    return (
        <li >
            <img 
                style={styles.img}
                src = {props.product.image}/>
            <p style={styles.caption}>{props.product.name}</p>
        </li>
    )
}

const styles ={
    img:{
        width: '90%',
        minWidth: '70%',
    },
    caption:{
        fontFamily: 'Lato',
        fontSize: '10px',
        textAlign: 'center',
        color: '#191126'
    }
}