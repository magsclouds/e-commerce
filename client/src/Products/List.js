import React from 'react';
import Item from './Item';
import { NavLink } from 'react-router-dom';

export default (props) => (
    <ul style={styles.grid}>
        {
        props.products.map((ele, i)=>{
            let url = `/gallery/ ${i}`
            return <NavLink to={url}><li key = {i}><Item product = {ele}/></li></NavLink>
        })
        }
    </ul>
)

const styles = {
    grid:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '13px'  
    }
}