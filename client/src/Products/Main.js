import React from 'react';
import List from '../Products/List';


export default class Main extends React.Component{

    render(){
        const products =[
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770943/ahmad-dirini-176494-unsplash.jpg', name: 'product 1', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770944/allen-cai-106401-unsplash.jpg', name: 'product 2', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770944/dil-680602-unsplash.jpg', name: 'product 3', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770944/fancycrave-223082-unsplash.jpg', name: 'product 4', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770944/christopher-alvarenga-1143629-unsplash.jpg', name: 'product 5', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770947/genessa-panainte-184324-unsplash.jpg', name: 'product 6', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770947/jeremy-bishop-93202-unsplash.jpg', name: 'product 7', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770949/jeremy-perkins-333405-unsplash.jpg', name: 'product 8', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770949/kamesh-vedula-59768-unsplash.jpg', name: 'product 9', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770951/nandhu-kumar-414066-unsplash.jpg', name: 'product 1', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770952/paul-green-126960-unsplash.jpg', name: 'product 7', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770953/sebastian-kanczok-199612-unsplash.jpg', name: 'product 8', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770954/thomas-lipke-1178300-unsplash.jpg', name: 'product 9', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770952/pratham-gupta-419799-unsplash.jpg', name: 'product 9', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' },
            {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770949/joshua-earle-133254-unsplash.jpg', name: 'product 9', desc: 'product description with multiple lines', price: '$ 500.00', artist: 'artist name' }
        ]
        return(
            <div>
                <div>
                    <List products ={products}/>
                </div> 
            </div>
        );

    }
    
}
