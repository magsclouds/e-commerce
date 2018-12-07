import React from 'react';

export default (props) => {
    
    return (
        <div style={styles.box}>
            <img 
                style={styles.img}
                src = {props.product.image}/>
                <p style={styles.caption}>{props.product.productName}</p>
            {/* <div>
                <button style={styles.adminButton}>admin</button>
            </div> */}
        </div>
    )
}

const styles ={
    box:{
        textAlign: 'center',
        margin: 'auto',
    },
    img:{
        width: '90%',
        minWidth: '70%',
    },
    caption:{
        fontFamily: 'Lato',
        fontSize: '10px',
        textAlign: 'center',
        color: '#191126'
    },
    adminButton:{
        backgroundColor: '#222222',
        borderRadius: '13px',
        border: 'none',
        color: 'white',
        padding: '3px 17px',
        textAlign: 'center',
    },
    
}