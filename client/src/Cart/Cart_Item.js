import React from 'react';

export default (props) => {
    return(
        <div>
            <div style = {styles.grid1}>
                <div>
                    <p>{props.product.name}</p>
                </div>
                <div>
                    <p>{props.product.price}</p>
                </div>
                <div>
                    <p style = {styles.theX}>X</p>
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
        fontSize: '13px'
    }
}