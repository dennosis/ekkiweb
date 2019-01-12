import React, { Component } from 'react';
import './App.css';

import { NavLink } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route

} from 'react-router-dom'

import Contacts from './Contacts/Contacts'
import Cards from './Cards/Cards'

//botoes icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoneyBillAlt, faUsers, faCreditCard} from '@fortawesome/free-solid-svg-icons'

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as userActions from './actions/user'


class App extends Component {
  constructor(props) {
    super(props)
    //console.log(props);
    this.props.login("dennisaguiar10@gmail.com","123456")
  }


  componentDidMount(){
  //console.log(this.props.user.cards)
 }


  render() {

    return (  
        <Router>
        <div className="container">
            <div className="box a">
                <div className="imgContainer">
                  <img alt = "" src={this.props.user.img}/>                                               
                </div>
            </div>
            <div className="box b">
                <span className="txtinfo  txtScrolling">{this.props.user.firstName + ' '+this.props.user.lastName }</span>
                <span className="txtsubinfo txtScrolling">R$ {this.props.user.valueAccount}</span>
            
            </div>
            <div className="box c">
              <div className="logo">
                <img alt='' src="https://i.imgur.com/QiAMG0g.jpg"/>
              </div>
            </div>

            <div className="box d">

                <NavLink  exact to="/" className="menu-item" activeClassName = "menu-item-active">
                  <FontAwesomeIcon icon={faMoneyBillAlt} size="2x"/>
                </NavLink>
                
                
                <NavLink  exact to="/contacts" className="menu-item" activeClassName = "menu-item-active">
                  <FontAwesomeIcon icon={faUsers} size="2x"/>
                </NavLink>

                <NavLink  exact to="/cards"  className="menu-item" activeClassName = "menu-item-active">
                    <FontAwesomeIcon icon={faCreditCard} size="2x"/>
                </NavLink>
            </div>

            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/cards' component={Cards}/>

        </div>
        </Router>

    );
  }
}

//export default App;
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);

















/*<div className="menu-item"></div>*/