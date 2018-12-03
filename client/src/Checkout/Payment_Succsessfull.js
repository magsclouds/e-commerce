import React from 'react';

export default class Payment extends React.Component{
    render(){
        return(
            <div>
                <div style={styles.box}>
                    <p style={styles.message}>Your payment was sucessfull and a confirmation email has been sent to your email address</p>
                </div>
                <div>
                    <p style={styles.bottom}>HAVE AN ENLIGHTED DAY!</p>
                </div> 
            </div>
        )}
}
const styles={
    message:{
        fontFamily: 'Lato',
        fontWeight: '100',
        fontSize: '13px',
        textAlign: 'center',
        color: 'white'
    },
    box:{
        backgroundColor: '#407107',
        width: '60%',
        inWidth: '40%',
        padding: '30px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '69px'
    },
    bottom:{
        fontFamily: 'Oswald',
        fontWeight: '300',
        fontSize: '21px',
        textAlign: 'center',
        color: '#407107'
    },
}



