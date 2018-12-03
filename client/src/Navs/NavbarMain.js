import React from 'react';
import Navbar from './Navbar';
import NavbarTop from './NavbarTop';

export default class NavbarMain extends React.Component{
    render(){
        return(
            <div>
                <NavbarTop/>
                <Navbar/>
            </div>
        )
    }
}