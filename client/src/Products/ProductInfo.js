import React from 'react';

export default class ProductInfo extends React.Component{
    render(){
        let obj = {image: 'https://res.cloudinary.com/magsclouds/image/upload/v1543770951/nandhu-kumar-414066-unsplash.jpg', name: 'the meduza lamp', desc: 'Working amid the din of printing presses and the smell of damp ink on paper, Smith developed the patience, and keen eye and delicate hand that would later serve him so well in his work with cuneiform tablets. His work also exposed him to a wider world, for Bradbury and Evans had branched out from printing into publishing; they owned the humour magazine Punch and published Dickens and Thackeray in lavishly illustrated editions. in the fall of 1860, the 20-yearold Smith, fascinated by ancient history, began to haunt the Near Eastern collections at the British Museum.', price: '500.00', artist: 'Kornel Makuszynski' }
        return(
            <div>

                <div style={styles.box}>
                    <img 
                    style={styles.img}
                    src={obj.image}/>
                    <p style={styles.artist}>{obj.artist}</p>
                    <p style={styles.price}><i class="fas fa-bolt"></i> {obj.price}</p>
                </div>
                    <hr/>
                 <div style={styles.main}>
                    <div>
                        <p className='title'>{obj.name}</p>
                    </div>
                    <div>
                        <p>{obj.desc}</p>
                    </div>
                    
                </div>
                <div style={styles.button}>
                    <button>ADD TO CART</button>
                </div>
                
            </div>
           
        )
    }
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
    button:{
        textAlign: 'center',
    }

}