import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavbarTop extends Component{
    render(){
        return(
            <ul style={styles.navbarTop}>
                <li>
                    <NavLink to="/">
                    <img 
                        style={{height: '133px', paddingTop: '10px'}}
                        src = 'https://res.cloudinary.com/magsclouds/image/upload/v1543709942/1.png' alt= 'logo'
                        />
                    </NavLink>
                </li>
                <li>
                    <h6
                    style={{marginTop: '0px', marginBottom: '19px'}}
                    >ILLUMINATING LIFE SINCE THE BIG BANG</h6>
                </li>
            </ul>
        )}
}
const styles = {
    navbarTop:{ 
        width: '30%',
        margin: 'auto',
        listStyle: 'none',
        textAlign: 'center',
        fontSize: '13px',
        letterSpacing: '3px',
        color: '#222222'
    },
    
}