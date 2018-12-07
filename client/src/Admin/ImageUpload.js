import React from 'react'
import widgetStyle from '../widgetStyle';

export default class UploadImages extends React.Component{

	uploadWidget = () => {
        window.cloudinary.openUploadWidget({ 
        	cloud_name: 'magsclouds', 
        	upload_preset: 'the_light', 
			tags:['user'],
			stylesheet:widgetStyle
        },
            (error, result)=> {
				this.props.getImage(result[0].secure_url,result[0].public_id);
                if(error){
					
                }else{
					fetch('http://localhost:3001/upload', {
						method: 'POST',
						headers: {
						  Accept: 'application/json',
						  'Content-Type': 'application/json'
						},
						body: JSON.stringify({
						  photo_url:result[0].secure_url, 
						  public_id:result[0].public_id
						}),
						}).then((response) => response.json())
							.then((responseJson) => {
								
						}).catch((e)=>{
							
						})
							  
                }
            });
    }

	render(){
		return (
			<div className="flex_upload">
                <div className="upload">
					<button 
						style={styles.adminButton}
						// className ="button_small"
                    	onClick={this.uploadWidget} > upload image
                    </button>
                </div>
            </div>
		)
	}
}

const styles = {

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