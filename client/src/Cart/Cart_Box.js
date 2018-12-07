import React from 'react';
import Cart_List from './Cart_List';

export default class Cart_Box extends React.Component{
    

    render(){
        
        return(
            <div>
                <div>
                    <Cart_List
                    handleDelete = {this.props.handleDelete}
                    products = {this.props.product}/>
                </div>
            </div>
    )}
}