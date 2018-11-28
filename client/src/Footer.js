import React, { Component } from 'react';
export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <div></div>
                <div>
                    <img
                    style={{height: '20px'}}
                    src= "https://res.cloudinary.com/magsclouds/image/upload/v1543419569/7.png"
                    />
                <ul>
                    <li>gallery@candlelit.com</li>
                    <li>+43 111 111 111</li>
                    <li>gutraterplatz   1160 wien  austria</li>
                    <hr/>
                    <li>copyright candlelit gallery</li>
                </ul>
                </div>
                <div></div>
            </div>
        )
    }
}