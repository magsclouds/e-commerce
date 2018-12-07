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
                    <hr style={styles.line_break}/>
                <div>
                    <p style={styles.delivery}>DELIVERY INFORMATION</p>
                    <div style={styles.grid_delivery}>
                        <div>
                            <p>SUPERSONIC</p>
                            <p>Between George's first and second expeditions to Iraq, a new Pasha had been installed in
Baghdad, and unlike his predecessor, took a strong and suspicious interest in Smith’s work – a
suspicion only increased, to George's surprise, by familiarity with European culture. The Pasha
was emboldened after learning that George was not, in fact, an agent of the British government
at all but only a newspaper correspondent. After his identity was revealed, George wrote in
fear: "he might do as he liked with me.”</p>
                        </div>
                        <div>
                            <p>SPEED OF LIGHT</p>
                            <p>December 1853, Ancient Ruins of Nineveh. Archaeological mounds outside of Mosul, northern
Iraq. Unbeknownst to them, Austin Henry Layard and Hormuzd Rassam stand atop the ruins of
ancient Nineveh. They have just discovered the Great Library of Ashurbanipal. Among the
30,000 tablets included in their excavations is Tablet XI of the Epic of Gilgamesh. The tablets are
shipped back to the British Museum in London, where they are catalogued, stored, and put on
display for the first time in almost three thousand years.</p>
                        </div>
                        <div>
                            <p>BLACK HOLE</p>
                            <p>He had seen everything, experienced everything. He was granted vision into the mysteries of
the deep, the secret places, the time before the Great Flood. He journeyed to the edge of the
world, returning back to us broken but whole.</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
    
}

const styles = {
    grid_delivery:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '33px'
    },
    delivery:{
        fontFamily: 'Oswald',
        fontSize: '21px',
        color: '#780315',
        textAlign: 'right',
        letterSpacing: '2px'
    },
    line_break:{
        marginTop: '100px',
        marginBottom: '100px'
    }

}

