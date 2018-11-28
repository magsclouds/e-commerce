import React, { Component } from 'react';
export default class NavbarTop extends React.Component{
    render(){
        return(
            <ul style={styles.navbarTop}>
                <li>
                    <img 
                        style={{height: '133px'}}
                        src = 'https://res.cloudinary.com/magsclouds/image/upload/v1543407931/1.candelit_gallery_logo.png'
                        />
                </li>
                <li>
                    <p>HANDMADE IN VIENNA SINCE 1991</p>
                </li>
            </ul>
        ) 
    }
}

const styles = {
   
    navbarTop:{ 
        width: '30%',
        margin: 'auto',
        listStyle: 'none',
        textAlign: 'center',
        fontSize: '10px',
    },
    
}