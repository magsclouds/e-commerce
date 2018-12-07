import React from 'react';

export default (props) => {
    debugger
    return(
        <div>
            <div style = {styles.grid1}>
                <div>
                    <p>{props.product.productName}</p>
                </div>
                <div>
                    <i class="fas fa-bolt"></i><p>{props.product.price}</p>
                </div>
                <div>
                    <button
                    onClick = {()=>props.handleDelete(props.product._id)}
                    style = {styles.theX}
                    >X</button>
                </div>
            </div> 
        </div>
        
    )
}

const styles = {
    grid1:{
        display: 'grid',
        gridTemplateColumns: '4fr 3fr 1fr',
        gridGap: '10px'
    },
   
    theX:{
        fontFamily: 'Nothing You Could Do',
        color: '#BB1A2D',
        fontWeight: '1000',
        fontSize: '13px',
        backgroundColor: 'white'
    },
}