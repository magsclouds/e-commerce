import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return(
            <div style={styles.main}>
                <div>
                    <ul style={styles.footerLeft}>
                        <li>CREATED BY <i class="far fa-copyright"></i> Maggie Rose</li>
                        <li>COLLABORATION</li>
                        <li>PORTFOLIO</li>
                    </ul>
                </div>
                <div>
                    <ul style={styles.footerCenter}>
                        <li><p style={{fontFamily: 'Oswald', fontSize: '23px', fontWeight: 'bold', color: 'white'}}>CONTACT</p></li> 
                        <li>maggierose@maggiestrips.com</li>
                        <li>+34 692925740</li>
                        <li>Calle Italia 175, 11130 Cadiz, Andalusia, España</li>
                            <hr/>
                        <li style={{lineHeight: '20px'}}> <i class="far fa-copyright"></i> maggiestrips design 2018</li>
                    </ul>
                </div>
                <div className='footer'>
                    <ul style={styles.footerRight}>
                        <li>DELIVERY INFORMATION</li>
                        <li><NavLink to="/gallery">GALLERY</NavLink></li>
                        <li><NavLink to="/about">ABOUT</NavLink></li>
                        <li><NavLink to="/">HOME</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const styles = {
    footerLeft:{
        listStyle: 'none',
        fontSize: '11px',
        color: 'white',
        textAlign: 'left',
        lineHeight: '25px',
        paddingLeft: '20px',
        marginTop: '23px'
    },
    footerCenter:{
        listStyle: 'none',
        fontSize: '10px',
        lineHeight: '17px',
        color: 'white',
        textAlign: 'center',
    },
    footerRight:{
        listStyle: 'none',
        fontSize: '11px',
        color: 'white',
        textAlign: 'right',
        lineHeight: '25px',
        paddingRight: '20px',
        marginTop: '23px'
    },
    main:{
        marginTop: '15%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        background: '#14140C',
        bottom: 0,
        width: '100%',
        minWidth: '500px'
    },
    
}