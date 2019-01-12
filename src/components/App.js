import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route

} from 'react-router-dom'

import Contacts from './Contacts/Contacts'
import Cards from './Cards/Cards'
/*
//botoes icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCreditCard} from '@fortawesome/free-solid-svg-icons'
*/




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"Alberto Santos Dumont",
      value:'1.200,00',
      foto:"https://www.escritas.org/autores/fernando-pessoa.jpg"
    }

  }

  
  
  render() {


    return (

      
        <Router>
        <div className="container">
            <div className="box a">
                <div className="imgContainer">
                  <img alt = "" src={this.state.foto}/>                                               
                </div>
            </div>
            <div className="box b">
                <span className="txtinfo  txtScrolling">{this.state.name}</span>
                <span className="txtsubinfo txtScrolling">R$ {this.state.value}</span>
            
            </div>
            <div className="box c">
              <div className="logo">
                <img alt='' src="https://i.imgur.com/QiAMG0g.jpg"/>
              </div>
            </div>
            <div className="box d">
                <div className="menu-item"></div>
                <div className="menu-item"></div>
                <div className="menu-item"></div>
            </div>


            

            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/cards' component={Cards}/>




        </div>
        </Router>

    );
  }
}

export default App;

