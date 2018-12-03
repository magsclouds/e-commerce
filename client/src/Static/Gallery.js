import React, { Component } from 'react';
import Main from '../Products/Main';


export default class Gellery extends Component{
    render(){
        return(
            <div>
                <div syle ={styles.box}>
                    <div style={styles.grid}>
                        <div>
                            <p
                            className='title'>
                                <span>art off</span>
                                <span>light</span>
                            </p>
                        </div>
                        <div>
                            <p
                            className='heading'>
                                <span>The Sun will rise and set regardless.</span>
                                <span>What we choose to do with the light while it's here is up to us.</span>
                                <span>Journey wisely...</span>
                            </p>
                        </div>
                    </div> 
                </div>
                <div>
                    <Main/>
                </div>
            </div>
        )}
}

const styles = {
    box: {
        width: '90%',
        minWidth: '50%',
        maxWidth: '700px',
        minWidth: '300px',
    },
    grid:{
        marginTop: '69px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridGap: '50px'
    }
}