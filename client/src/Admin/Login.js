import React from 'react';

export default class App extends React.Component {

    state={
        username:'',
        password:''
    }
    handleChange = event => {
        let { name, value } = event.target;
        this.setState({[name]:value});
    }
    handleSubmit = event => {
        
        event.preventDefault();
        let { username, password } = this.state;
            const url = 'http://localhost:3001/users/login';
            fetch(url, {
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username:username,
                    password:password
                })
            }).then((res)=>{
                this.setState({
                    username:'',
                    password:''
                })
                if(res.ok) {
                    this.props.history.push('/')
                    res.json()
                    .then((resJson)=>{
                        let {token} = resJson;
                        token = JSON.stringify(token);
                        localStorage.setItem('token', token);
                    })
                } 
            }).catch((event)=>{
                
            })
    }
    
    render(){
        return(
            <div style={styles.box}>
                <p>ADMIN LOGIN</p>
                 <form onSubmit={this.handleSubmit}>
                    <input
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder='user name'
                    type='text'></input>
                    <br/>
                    <input
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder='password'
                    type='text'></input>
                    <button>LOGIN</button>
                </form>       
            </div>
        )}
}

const styles = {
    box:{
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#ddd',
        margin: 'auto',
        textAlign: 'center',
        maxWidth: '50%'
    },
    header:{
        textAlign: 'center',
    }
}