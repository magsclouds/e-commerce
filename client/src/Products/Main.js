import React from 'react';
import List from '../Products/List';


export default class Main extends React.Component{
    state = {
        products:[]
    }
    componentDidMount(){
        this.getProducts();
    }

    getProducts = () =>{
        const url ='http://localhost:3001/products';
        fetch(url).then((res)=>{
            res.json().then((resJson)=>{
            this.setState({products:resJson});
            })
        }).catch((err)=>{
            })
    }

    render(){
        return(
            <div>
                <div>
                    <List products ={this.state.products}/>
                </div>
                    
                <div style={styles.box}>
                    <p style={styles.delivery}>
                    DELIVERY INFORMATION
                    </p>
                    <div style={styles.grid_delivery}>
                        <div>
                            {/* empty column */}
                        </div>
                        <div>
                            <p className='headingWhite'>
                            WORMHOLE
                            </p>
                                <hr/>
                            <p style={styles.deliveryP}>
                           Instant delivery through a wormhole. The intergalactic shortcut. A tunnel through space-time that allows intrepid travelers to hop from star system to star system without ever coming close to the speed of light.
                            </p>
                        </div>
                        <div>
                            <p className='headingWhite'>
                            SPEED OF LIGHT
                            </p>
                                <hr/>
                            <p style={styles.deliveryP}>
                            A parcel traveling at the speed of light would experience a slowing of time. For that parcel, time would move slower than for someone who is waiting for it. When an object travels at the speed of light, its mass will increase exponentially, hence the higher delivery cost...
                            </p>
                        </div>
                        <div>
                            <p className='headingWhite'>
                            BLACK HOLE
                            </p>
                                <hr/>
                            <p style={styles.deliveryP}>
                            A black hole has a boundary, called the event horizon. It is where gravity is just strong enough to drag light back, and prevent it escaping. Because nothing can travel faster than light, everything else will get dragged back also. Once your parcel falls over the edge of the event horison we will be unable to track it.
                            </p>
                        </div>
                        <div>
                            {/* empty column */}
                        </div>
                    </div>
                </div>

            </div>
)}}

const styles = {
    grid_delivery:{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 3fr 3fr 1fr',
        gridGap: '33px'
    
    },
    delivery:{
        fontFamily: 'Lato',
        fontSize: '1.5em',
        color: '#fc461e',
        textAlign: 'center',
        letterSpacing: '0.7em',
    },
    deliveryP:{
        color: 'white',
        fontSize: '0.6em'
    },
    line_break:{
        marginTop: '3em',
        marginBottom: '3em',
    },
    back_box:{
        paddingLeft: '5em',
        paddingRight: '5em',
        paddingTop: '1em',
        paddingBottom: '1em',
        minWidth: '43em'
    },
    box:{
        backgroundColor: '#14140C',
        border: 'none',
        marginTop: '7em',
        width: '100%',
        textAlign: 'center',
    },


}

