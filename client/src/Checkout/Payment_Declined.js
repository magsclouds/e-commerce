import React from 'react';

export default class Declined extends React.Component{
    render(){
        return(
            <div>
                <div style={styles.box}>
                    <p style={styles.message}>Yur payment has been declined. Please try again...
                    </p>
                    <button
                    style={styles.button}
                    >GO TO PAYMENT</button>
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
        backgroundColor: '#780315',
        width: '60%',
        minWidth: '40%',
        padding: '30px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '69px'
    },
    button:{
        borderRadius: '23px',
        border: 'solid',
        borderWidth: '1px',
        color: '#780315',
        padding: '7px 30px',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '10px',
        backgroundColor: 'white',
        minWidth: '100px',
        margin: 'auto',
      },
}