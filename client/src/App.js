import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './NavbarMain/Navbar';
import NavbarTop from './NavbarMain/NavbarTop';
import Footer from './Footer';

class App extends Component {
  
  
  
  render(){
    return(
      <Router>
        <div>
        <NavbarTop/>
        <Navbar/>
        <div className="container">

        </div>
        <Footer/>
        </div>
      </Router>
    );



  }

}


export default App;