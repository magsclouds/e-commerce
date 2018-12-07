import React from 'react';
import Cart_Box from './Cart_Box';

export default class Cart_Main extends React.Component {

    state = {
        cart:[],
        total:0
    }

    componentDidMount(){
        let cart = localStorage.getItem('cart');
        if(cart){
            cart = JSON.parse(cart)
            this.setState({cart})
        }
        this.cartTotal();
    }

    handleDelete = (ID) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let index = cart.findIndex((ele)=> ele._id === ID)
        cart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(cart))
        this.setState({cart})
        this.cartTotal();
    }
    
    cartTotal = () => {
        let total = 0
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.map((ele)=>{ 
            total += Number(ele.price)
        })
        this.setState({total})
    }

    render() {
        return(
            <div>
                <div style={styles.grid}>
                    <div>
                         <p
                            className='title'>
                            <span>your</span>
                            <span>shopping</span>
                            <span>cart</span>
                        </p>
                    </div>
                    <div style={styles.box}>
                        <div>
                            <Cart_Box
                                handleDelete = {this.handleDelete}
                                product = {this.state.cart}/>
                        </div>
                            <div style = {styles.grid2}>
                                <div>
                                    <p>SUBTOTAL</p>
                                </div>
                                <div>
                                    <p>{this.state.total}</p>
                                </div>
                                <div>
                                    {/* empty column */}
                                </div>         
                            </div>
                        </div>
                    </div>  
                <div style={styles.button}>
                    <button>GO TO CHECKOUT</button>
                </div>
            </div>
    )}
}
const styles = {
    
    grid:{
        marginTop: '69px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridGap: '21px'
    },
    box:{
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#ddd',
        width: '100%',
        maxWidth: '500px',
        minWidth: '300px',
    },
    button:{
        textAlign: 'center',
        margin: '69px'
    },
    grid2:{
        display: 'grid',
        gridTemplateColumns: '4fr 3fr 1fr',
        gridGap: '10px'
    },
    
}
