import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component{
   render(){
       return(
           <div style={styles.navbar}>
                <li>ABOUT</li>
                <li>GALLERY</li>
                <li>SHOPPING CART</li>
           </div>
       );
   }

}

const styles = {
    navbar:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '43px',
        listStyle: 'none',
        borderTop: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
    }
}
