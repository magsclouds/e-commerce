import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavbarMain from './Navs/NavbarMain';
import Footer from './Navs/Footer';
import Home from './Static/Home';
import Gallery from './Static/Gallery';
import About from './Static/About';
import ProductInfo from './Products/ProductInfo';
import Cart_Main from './Cart/Cart_Main';
import Payment from './Checkout/Payment_Succsessfull';
import Declined from  './Checkout/Payment_Declined';
import Checkout from './Checkout/Checkout_Form';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
        <NavbarMain/>
          <div className="container">
            <Route exact path = "/" component={Home}/>
            <Route exact path  = "/gallery" component ={Gallery}/>
            <Route path = "/about" component={About}/>
            <Route path = "/cart" component={Cart_Main}/>
            <Route path = "/gallery/:product" component={ProductInfo}/>
            <Route path = "/payment" component={Payment}/>
            <Route path = "/declined" component={Declined}/>
            <Route path = "/checkout" component={Checkout}/>
          </div>
        <Footer/>
        </div>
      </Router>
    );
  }

}


export default App;