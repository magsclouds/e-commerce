import React from 'react';

export default class Update_Product extends React.Component{

    state = {
        ID:'',
        newName:'',
        newArtist:'',
        newPrice:'',
        newInfo:''
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
            <div style={styles.box}>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name='ID' value={this.state.value}
                        onChange={this.handleChange} placeholder='PRODUCT ID' type='text'></input>
                        <br/>
                    <input
                        name='newName' value={this.state.value}
                        onChange={this.handleChange} placeholder='update name' type='text'></input>
                        <br/>
                    <input
                        name='newArtist' value={this.state.value}
                        onChange={this.handleChange} placeholder='update artist name' type='text'></input>
                        <br/>
                    <input 
                        name='newPrice' value={this.state.value}
                        onChange={this.handleChange} placeholder='update price' type='text'></input>
                        <br/>
                        <p>Product Information</p>
                    <textarea 
                        name='newInfo' value={this.state.value}
                        onChange={this.handleChange} rows='7'></textarea>
                        <br/>
                    <button>IMAGE UPLOAD</button>
                        <hr/>
                    <button>SUBMIT</button>
                </form>
                    
            </div>
    )}  
}

const styles={
    box:{
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#ddd',
        margin: 'auto',
        textAlign: 'center',
        maxWidth: '50%'
    },

}