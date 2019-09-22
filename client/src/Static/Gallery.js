import React, { Component } from 'react';
import Main from '../Products/Main';


export default class Gellery extends Component{
    render(){
        return(
            <div>
                <div syle ={styles.back_box}>
                    <div style={styles.grid}>
                        <div>
                            <p
                            className='title'>
                                <span>art of</span>
                                <span>light</span>
                            </p>
                        </div>
                        <div>
                            <p className='heading'>
                            Tibetan Light Offering              
                            </p>
                                <hr/>
                            <p>
                            May this vessel become as vast as the entire billionfold universe! May its wick grow as large as Sumeru, the king of mountains!
                            May the oil within become as vast as the great ocean at the edge of the world!
                            </p>
                            <p>
                            And may a billion such lamps appear before each and every buddha!
                            </p>
                            <p>
                            Their light banishing the darkness of ignorance everywhere, from the very peak of existence down to the lowest hell, may they reveal all the realms of buddhas and bodhisattvas throughout the ten directions!
                            </p>
                        </div>
                        <div>
                            {/* empty column */}
                        </div>
                    </div> 
                </div>
                    <hr style={styles.line_break}/>
                <div>
                    <Main/>
                </div>
            </div>
        )}
}

const styles = {
    grid:{
        marginTop: '69px',
        display: 'grid',
        gridTemplateColumns: '3fr 6fr 1fr',
        gridGap: '50px'
    },
    line_break:{
        marginTop: '60px',
        marginBottom: '60px'
    },
    back_box:{
        paddingLeft: '5em',
        paddingRight: '5em',
        paddingTop: '1em',
        paddingBottom: '1em',
        minWidth: '43em'
    },
  
}