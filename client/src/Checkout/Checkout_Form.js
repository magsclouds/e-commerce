import React from 'react';
import Cart_Box from '../Cart/Cart_Box';
import Countries from './Countries';

export default class Checkout extends React.Component{
    state = {
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        country:'',
        address:'',
        houseNumber:'',
        city:'',
        postcode:'',
        state:'',
        delivery:''
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value},()=>{
            console.log(this.state)
        })
    }
    handleSubmit = event => {
        event.preventDefault();
    }
    render(){

        return(
            <div>
                <div>
                    <p>DELIVERY DETAILS & ORDER SUMMARY</p>
                </div>
                <div style={styles.grid}>
                    <div style={styles.box}>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                name="firstname" value={this.state.firstname}
                                onChange={this.handleChange} placeholder='First name'type='text'></input>
                            <input 
                                name="lastname" value={this.state.lastname}
                                onChange={this.handleChange} placeholder='Last name'type='text'></input>
                                <br/>
                            <input
                                name="email" value={this.state.email}
                                onChange={this.handleChange} placeholder='Email' type='email'></input>
                            <input
                                name="phone" value={this.state.phone}
                                onChange={this.handleChange} placeholder='Phone' type='tel'></input>
                                <hr/>
                            <select
                                onChange={this.handleChange}
                                name="country" value={this.state.country}>
                                {Countries.map((ele, i)=>{
                                return(
                                    <option key={i} value={ele.name}>{ele.name}</option> 
                                )
                            })}
                            </select>
                                <br/>
                            <input 
                                name="address" value={this.state.address}
                                onChange={this.handleChange} placeholder='street address' type='text'></input>
                            <input
                                name="houseNumber" value={this.state.houseNumber}
                                onChange={this.handleChange} placeholder='house/flat #' type='text'></input>
                                <br/>
                            <input
                                name="city" value={this.state.city}
                                onChange={this.handleChange} placeholder='town/city' type='text'></input>
                            <input
                                name="postcode" value={this.state.postcode}
                                onChange={this.handleChange} placeholder='post code' type='text'></input>
                                <br/>
                            <input 
                                name="state" value={this.state.state}
                                onChange={this.handleChange} placeholder='state/region' type='text'></input>
                            <br/>
                            <p>Additional info:</p>
                            <textarea
                                name="info" value={this.state.info}
                                onChange={this.handleChange}
                            type='text'
                            rows='3'
                            ></textarea>
                            <br/>
                            <div>
                                <Cart_Box/>
                                <hr/>
                                <p>Delivery Options</p>
                                <select
                                onChange={this.handleChange}
                                name="country" value={this.state.country}>
                                {['Supersonic','Speed of light','Black Hole'].map((ele, i)=>{
                                return(
                                    <option key={i} value={ele}>{ele}</option> 
                                )
                            })}
                            </select>
                                    <p>TOTAL:</p>
                                    <p>1000</p>
                            </div>
                                <button>SUBMIT</button> 
                        </form>
                    </div>
                    
                </div>
                    <br/>
                <div>
                    <i class="fab fa-cc-visa"></i><i class="fab fa-cc-mastercard"></i><i class="fab fa-cc-amex"></i>
                    <br/>
                    <p>After pressing submitt, you will be redirected to the secure payment area</p>
                    <button>CONFIRM YOUR ORDER & PAY</button>
                </div>

            </div>
        )
    }

}
const styles = {
    grid:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '12px',
    },
    box:{
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#ddd',
        width: '100%',
        padding: '20px'
    }
}