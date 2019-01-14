
import React, { Component } from 'react'
import './LoginPage.css';

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as userActions from './actions/user'



import {
    BrowserRouter as Router,
    Route,
    Redirect 
  
  } from 'react-router-dom'
  


class LoginPage extends Component{
    constructor(props){
        super(props)
        this.props.logout();
        this.state = {
            isRegister: false,
            login:{
                email:'',
                password:''
            },
            register:{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmpassword:'',
                cpf: '',
                account: ''
            }
        }
        
    }


    registerMode = () => {
     
        this.setState({
           isRegister: !this.state.isRegister
        });   
    }




    login = () =>{
        this.props.login(this.state.login.email,this.state.login.password)
    }

  
    createUser = async () =>{
        const user = {
            firstName: this.state.register.firstName,
            lastName: this.state.register.lastName,
            email: this.state.register.email,
            password: this.state.register.password,
            cpf: '',
            account: this.state.register.account,
            isActive:true,
            valueAccount: "",
            img: ""
        }

        if(this.state.register.password === this.state.register.confirmpassword){
            
             this.props.createUser(user);
            //console.log(user)
        }else{
            alert("Senhas Diferentes")
        }


    }



    inputOnChange = (value, name, tp) =>{
        var modo, datas
        if(tp===1){
            modo='login'
            datas = this.state.login
        }else{
            modo='register'
            datas=this.state.register
        }
        this.setState({
                [modo]:{...datas,
                    [name]: value,
                }
                 
        });

        console.log(this.state)
    }


    




    render(){
            
        var titulo;
        if(!this.state.isRegister){
            titulo = "Login"
        }else{
            titulo = "Registrar"
        }


        return (

            
            <div className="login">

                {this.props.user.email > '' &&
                        <Redirect to={{ pathname: "/transactions", state: { referrer: "/login" }}} />
                }

             
                    <div className="titleComponent">
                            <span>{titulo}</span>                            
                    </div>
                
                    {!this.state.isRegister &&
                    <div className="corpLogin">
                        <div className = "groupInput" >
                            <label  className = "labelInput">Email</label>
                            <input name = 'email' value={this.state.login.email} type="email"  className="inputForm" onChange={e => this.inputOnChange(e.target.value, e.target.name,1)}/>
                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Senha</label>
                            <input name='password' value={this.state.login.password} className="inputForm"  type="password" onChange={e => this.inputOnChange(e.target.value, e.target.name,1)}/>

                        </div>

                        <div className = "groupButton">
                            <button type = 'button'  onClick = {this.login} className="btn">Login</button>
                            <button onClick={this.registerMode} type = 'button'  className="btn">Register</button>
                        </div>

                    </div>
                    }

                    {this.state.isRegister &&
                    <div className="corpLogin">
          

                
                        <div className = "groupInput" >
                            <label  className = "labelInput">Nome</label>
                            <input name = 'firstName' value = {  this.state.register.firstName} type="text"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name,2)}/>
                        </div>

                        <div className = "groupInput" >
                            <label  className = "labelInput">Sobrenome</label>
                            <input name = 'lastName' value = { this.state.register.lastName} type="text"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name,2)}/>
                        </div>

              

                        <div className = "groupInput" >
                            <label  className = "labelInput">Conta</label>
                            <input name = 'account' value = {this.state.register.account} type="text"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name, 2)}/>
                        </div>

                   
 
                        <div className = "groupInput" >
                            <label  className = "labelInput">Email</label>
                            <input name = 'email' type="email"  value = { this.state.register.email} className="inputForm" onChange={e => this.inputOnChange(e.target.value, e.target.name, 2)}/>
                        </div>
                  
                        <div className = "groupInput" >
                            <label className = "labelInput">Senha</label>
                            <input name='password' className="inputForm" value = { this.state.register.password} type="password"  onChange={e => this.inputOnChange(e.target.value, e.target.name, 2)}/>

                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Confirmar Senha</label>
                            <input name='confirmpassword' className="inputForm"  value = { this.state.register.confirmpassword} type="password" onChange={e => this.inputOnChange(e.target.value, e.target.name, 2)}/>

                        </div>


                        <div className = "groupButton">
                            <button onClick = {this.createUser} type = 'button'  className="btn">Registar</button>
                            <button onClick={this.registerMode} type = 'button'  className="btn">Cancelar</button>
                        </div>

                    </div>
                    }


            </div>
                
        )
    }

}


const mapStateToProps = state => ({
    user: state.user,
});
  
const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);




