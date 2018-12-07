import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component{
   render(){
       return(
           <div style={styles.navbar}>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/gallery">GALLERY</NavLink></li>
                <li><NavLink to="/cart">CART</NavLink></li>
                <li><NavLink to="/admin/add">ADD</NavLink></li>
           </div>
       );
   }
}

const styles = {
    navbar:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '33px',
        fontSize: '13px',
        listStyle: 'none',
        borderTop: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
        marginTop: '23px',
        marginBottom: '33px'
    },
}
