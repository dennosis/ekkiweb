import React, { Component } from 'react';
import './App.css';

import { NavLink } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Redirect 

} from 'react-router-dom'

import Contacts from './Contacts/Contacts'
import Cards from './Cards/Cards'
import User from './User/User'
import Transactions from './Transactions/Transactions'
import LoginPage from './LoginPage'

//botoes icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoneyBillAlt, faUsers, faCreditCard, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons'

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as userActions from './actions/user'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {} 
  }


logout = ()=>{
//console.log(this.props)
  this.props.logout();

}

  render() {

    return (  
      <Router>



      <div className='app'>
        

     
      {this.props.user.length === 0 &&
        <Redirect to={{ pathname: "/login"}} />
      }


        {this.props.user.email > '' &&
        <div className="container">
          
            <div className="box a">
                <NavLink  exact to="/user" className="menu-item imgContainer" activeClassName = "menu-item-active">
                
                  {this.props.user.img > '' && <img alt = "" src={this.props.user.img}/> }
                  {this.props.user.img === '' &&  <FontAwesomeIcon icon={faUser} size="2x"/>}
                </NavLink>
                
            </div>
            <div className="box b">
                <span className="txtinfo  txtScrolling">{this.props.user.firstName + ' '+this.props.user.lastName }</span>
                <span className="txtsubinfo txtScrolling">R$ {this.props.user.valueAccount}</span>
            
            </div>
            <div className="box c">
              <div className="logo">
                <img alt='' src={require("../logo.png")}/>
              </div>
            </div>

            <div className="box d">
                

                <NavLink  exact to="/transactions" className="menu-item" activeClassName = "menu-item-active">
                  <FontAwesomeIcon icon={faMoneyBillAlt} size="2x"/>
                </NavLink>
                
                
                <NavLink  exact to="/contacts" className="menu-item" activeClassName = "menu-item-active">
                  <FontAwesomeIcon icon={faUsers} size="2x"/>
                </NavLink>

                <NavLink  exact to="/cards"  className="menu-item" activeClassName = "menu-item-active">
                    <FontAwesomeIcon icon={faCreditCard} size="2x"/>
                </NavLink>

                <FontAwesomeIcon onClick= {this.logout} icon={faSignOutAlt} size="1x"/>

            </div>





            <Route exact path='/transactions' component={Transactions}/>
            <Route exact path='/user' component={User}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/cards' component={Cards}/>
  
        </div>
        }
        
        {
    /*this.props.user.length === 0 &&*/
            <Route exact path='/login' component={LoginPage}/>  
        }


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




/*

<img alt='' src="https://i.imgur.com/QiAMG0g.jpg"/>
*/








