import React from 'react';

export default class ProductInfo extends React.Component{

    state = {}
    
    componentDidMount(){
        let url = `http://localhost:3001/products/${this.props.match.params.product}`;
        fetch(url).then((res)=>{
            if(res.ok){
                res.json().then((resJson)=>{
                    this.setState({...resJson});
                }) 
            }
        }).catch((err)=>{
            })
    }
    handleDelete = () => {
        let check = window.confirm('Are you sure? This might end the Universe!!!')
        if (check === true){
            let url = `http://localhost:3001/products/delete`
            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ID:this.state._id})
            }).then((res)=>{
                res.json().then((resJson)=>{
                })
                if(res.ok){
                        this.props.history.push('/gallery')
                }else{
                    alert('You failed and you are falling into a blac hole!!!')
                }
            }).catch((err)=>{
                }) 
    }}

    addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || []; //cart = []
            cart.push(this.state)
            localStorage.setItem('cart',JSON.stringify(cart))
            alert('Light is in your cart')
    }
  
    render(){
        
        return(
            <div>
                <div style={styles.box}>
                    <img 
                    style={styles.img}
                    src={this.state.image}/>
                    <p style={styles.artist}>{this.state.artistName}</p>
                    <p style={styles.price}><i class="fas fa-bolt"></i> {this.state.price}</p>
                </div>
                    <hr/>
                 <div style={styles.main}>
                    <div>
                        <p className='title'>{this.state.productName}</p>
                    </div>
                    <div>
                        <p>{this.state.productInfo}</p>
                    </div>  
                </div>
                <div style={styles.button}>
                    <button onClick={this.addToCart}>ADD TO CART</button>
                </div> 
                    <hr style={styles.line_break}/>

                    <div style={styles.adminBox}>
                        {/* <p>ADMIN AREA</p> */}
                        <button onClick = {this.handleDelete} style={styles.adminButton}>delete product</button>
                        <button style={styles.adminButton}>update product</button>
                    </div> 
            </div>   
    )}
}

const styles = {
    box:{
        marginTop: '53px',
        marginBottom: '69px',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    },
    img:{
        width: '100%',
    },
    artist:{
        fontFamily: 'Nothing You Could Do',
        color: '#BB1A2D',
        fontWeight: '1000',
        fontSize: '17px',
        padding: '10px'
    },
    price:{
        fontFamily: 'Lato',
        fontSize: '13px',
        color: '#222222',
        padding: '10px'
        
    },
    main:{
        marginTop: '33px',
        marginBottom: '33px',
        display: 'grid',
        gridGap: '23px',
        gridTemplateColumns: '1fr 2fr',
        width: '100%'
    },
    line_break:{
        marginTop: '100px',
        marginBottom: '100px'
    },
    button:{
        textAlign: 'center',
    },
    adminButton:{
        backgroundColor: '#222222',
        borderRadius: '3px',
        border: 'none',
        color: 'white',
        padding: '9px 60px',
        textAlign: 'center',
        display: 'inline-block',
        font: '11px'
    },
    adminBox:{
        marginTop: '69px',
        textAlign: 'center',
        backgroundColor: '#E5E5E5',
        padding: '33px',
        display: 'flex',
        justifyContent: 'space-around',
        borderRadius: '3px'
    }

}