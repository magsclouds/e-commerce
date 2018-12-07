import React from 'react';
import UploadImages from './ImageUpload';


export default class Add_Product extends React.Component{

    state = {
        productName:'',
        artistName:'',
        price:'',
        productInfo:'',
        image:'',
        image_public_id:''
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value},()=>{
            console.log(this.state)
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.addProduct()
        // this.setState({})
    }
    
    // Declare a function here to grab data from child
    // pass it via props to child
    // callit from the child passing the data along as argument.
    getImage = (url, publicID) =>{
        this.setState({image:url, image_public_id:publicID})
    }

    addProduct = () => {
        const url = 'http://localhost:3001/products/add';
        fetch (url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                productName:this.state.productName,
                artistName:this.state.artistName,
                price:this.state.price,
                productInfo:this.state.productInfo,
                image:this.state.image,
                image_public_id:this.state.image_public_id
            })
        }).then((res)=>{
            this.setState({
                productName:'',
                artistName:'',
                price:'',
                productInfo:'',
                image:'',
                image_public_id:''
            })
            if(res.ok){
                res.json().then((resJson)=>{
                    // alert('Product was added sucessfully')
                    this.props.history.push('/gallery')
                })
            }else{
                alert('You failed and you are falling into a blac hole!!!')
            }

        }).catch((err)=>{
            }) 
    }
    
    render(){
        return(
            <div style={styles.box}>
                <UploadImages getImage={this.getImage}/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='productName' value={this.state.productName}
                        onChange={this.handleChange} placeholder='product name' type='text'></input>
                        <br/>
                    <input
                        name='artistName' value={this.state.artistName}
                        onChange={this.handleChange} placeholder='artist name' type='text'></input>
                        <br/>
                    <input
                        name='price' value={this.state.price}
                        onChange={this.handleChange} placeholder='price' type='number'></input>
                        <br/>
                    <p>Product Information</p>
                    <input 
                        name='productInfo' value={this.state.productInfo}
                        onChange={this.handleChange} ></input>
                    <br/>
                        <hr/>
                    <button style={styles.adminButton}>SUBMIT</button>
                </form>  

            </div>
    )}  
}

const styles={
    box:{
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#ddd',
        margin: 'auto',
        textAlign: 'center',
        maxWidth: '50%'
    },
    adminButton:{
        backgroundColor: '#222222',
        borderRadius: '23px',
        border: 'none',
        color: 'white',
        padding: '9px 60px',
        textAlign: 'center',
        display: 'inline-block',
        font: '11px'
    },

}
