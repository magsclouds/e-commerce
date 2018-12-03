import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return(
            <div>

                <div style = {styles.box}>
                    <img width='100%' src = 'https://res.cloudinary.com/magsclouds/image/upload/v1543796124/benjamin-davies-361151-unsplash.jpg'/>
                    {/* <img width='100%' src = 'https://res.cloudinary.com/magsclouds/image/upload/v1543744846/greg-rakozy-38802_cropped.jpg'
                    alt = 'Greg Rakozy, Universe'/> */}
                    <div style={styles.text_block}>
                        <p style={styles.text}>
                        In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep.
                        (...) And God said, Let there be light: and there was light.
                        </p>
                        <button
                        style={styles.button}
                        >ILLUMINATE ME
                        </button>
                    </div> 
                </div>

            </div>
        )
    }
}

const styles = {
    
    box:{
        position: 'relative',
        border: 'none',
        width: '100%',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '69px'
        },
    button:{
        borderRadius: '23px',
        border: 'solid',
        borderWidth: '1px',
        color: 'black',
        padding: '7px 30px',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '10px',
        backgroundColor: 'white',
        marginBottom: '20px',
        minWidth: '100px'
      },
      text: {
        fontFamily: 'Lato',
        fontSize: '13px',
        letterSpacing: '1px',
        lineHeight: '21px',
        textAlign: 'right',
        color: 'white'
      },
    text_block: {
        position: 'absolute',
        top: '41px',
        right: '41px',
        backgroundColor: '#14140C',
        paddingLeft: '30px',
        paddingRight: '30px',
        textAlign: 'right',
        minWidth: '170px',
        maxHeight: '300px'
     }

}