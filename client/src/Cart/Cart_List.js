import React from 'react';
import Cart_Item from './Cart_Item';

export default (props) => {
       return  <ul>
        {
        props.products.map((ele, i)=>{
            return <li key = {i}><Cart_Item product = {ele}/></li>
        })
        }
    </ul>
}


