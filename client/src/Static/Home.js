import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component{

    render(){
        return(
            <div>
                <div style = {styles.box}>
                    <img width='100%' src = 'https://res.cloudinary.com/magsclouds/image/upload/v1544284160/assypwunqc5nxx7eo69z.jpg'/>
                    <div style={styles.text_block}>
                        <p style={styles.text}>
                        In the beginning God created the heaven and the earth. And the earth was without form (...) and darkness was upon the face of the deep
                        (...) And God said, Let there be light: and there was light.
                        </p>
                            <NavLink to="/gallery">
                                <button
                                style={styles.button}
                                >ILLUMINATE ME
                                </button>
                            </NavLink>
                    </div> 
                </div>
                <div style={styles.back_box}>
                    <div style={styles.grid}>
                        <div>
                            <p className='heading'>
                            Light              
                            </p>
                                <hr/>
                            <p>
                            Light is a transverse, electromagnetic wave that can be seen by the typical human. The wave nature of light was first illustrated through experiments on diffraction and interference. Like all electromagnetic waves, light can travel through a vacuum. The transverse nature of light can be demonstrated through polarization.
                            Light is produced by one of two methods:
                            </p>
                                <p>
                                INCANDESCENCE is the emission of light from "hot" matter (T ≳ 800 K).
                                </p>
                                <p>
                                LUMINESCENCE is the emission of light when excited electrons fall to lower energy levels
                                (in matter that may or may not be "hot").
                                </p>
                            <p>
                            The speed of light in a vacuum is 186,282 miles per second (299,792 kilometers per second), and in theory nothing can travel faster than light. In miles per hour, light speed is, well, a lot: about 670,616,629 mph. If you could travel at the speed of light, you could go around the Earth 7.5 times in one second.
                            </p>
                                <hr/>
                            <p>
                            <cite>The Physics Hypertextbook</cite>
                            </p>
                        </div>
                        <div>
                            <p className='heading'>
                            ENLIGHTENMENT             
                            </p>
                                <hr/>
                            <p>
                            Enlightenment is man's emergence from his self-imposed nonage. Nonage is the inability to use one's own understanding without another's guidance. This nonage is self-imposed if its cause lies not in lack of understanding but in indecision and lack of courage to use one's own mind without another's guidance. Dare to know! (Sapere aude.) "Have the courage to use your own understanding," is therefore the motto of the enlightenment.
                            </p>
                            <p>
                            It is very difficult for the individual to work himself out of the nonage which has become almost second nature to him. He has even grown to like it, and is at first really incapable of using his own understanding because he has never been permitted to try it. Dogmas and formulas, these mechanical tools designed for reasonable use--or rather abuse--of his natural gifts, are the fetters of an everlasting nonage. The man who casts them off would make an uncertain leap over the narrowest ditch, because he is not used to such free movement. That is why there are only a few men who walk firmly, and who have emerged from nonage by cultivating their own minds.
                            </p>
                            <p>
                            A man may postpone his own enlightenment, but only for a limited period of time. And to give up enlightenment altogether, either for oneself or one's descendants, is to violate and to trample upon the sacred rights of man. 
                            </p>
                                <hr/>
                            <p>
                            <cite>Immanuel Kant</cite>
                            </p>
                        </div>
                    </div>
                </div>
               
                    
            </div>
)}}

const styles = {
    
    box:{
        position: 'relative',
        border: 'none',
        width: '100%',
        minWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    button:{
        borderRadius: '23px',
        borderWidth: '1px',
        color: 'black',
        padding: '7px 30px',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '10px',
        backgroundColor: 'white',
        marginTop: '5em',
    },
    text: {
        fontFamily: 'Lato',
        fontSize: '0.8em',
        letterSpacing: '1px',
        lineHeight: '1.9em',
        textAlign: 'center',
        color: 'white'
    },
    text_block: {
        position: 'absolute',
        top: '9em',
        paddingLeft: '5em',
        paddingRight: '5em',
        textAlign: 'center',
    },
    grid:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '33px',
        minWidth: '500px'
    },
    line_break:{
        marginTop: '100px',
        marginBottom: '69px'
    },
    back_box:{
        paddingLeft: '5em',
        paddingRight: '5em',
        paddingTop: '1em',
        paddingBottom: '1em',
        minWidth: '43em'
    },

}