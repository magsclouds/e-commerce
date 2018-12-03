import React from 'react';
import Cart_List from './Cart_List';

export default class Cart_Box extends React.Component{
    render(){
        const cartProducts =[
            {image: 'https://images.unsplash.com/photo-1494249465471-5655b7878482?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=191559dc1cae3f8967d568dfd8a77093&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb', name: 'product 1', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://images.unsplash.com/photo-1494249465471-5655b7878482?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=191559dc1cae3f8967d568dfd8a77093&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb', name: 'product 2', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' }
        ]
        return(
            <div>
                <div>
                    <Cart_List products = {cartProducts}/>
                </div>
            </div>
    )}
}