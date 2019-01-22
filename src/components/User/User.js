
import React, { Component } from 'react'
import './User.css';

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as userActions from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//botoes icones
import {faUpload, faUser} from '@fortawesome/free-solid-svg-icons'

import Cleave from 'cleave.js/react';

class User extends Component{
    constructor(props){
        super(props)

        this.state = {
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email,
            password:"",
            cpf: this.props.user.cpf,
            account: this.props.user.account,
            isActive:this.props.user.isActive,
            valueAccount: this.props.user.valueAccount,
            img: this.props.user.img,
            isSave:false,
            confirmPassword:'',
            file:""
        } 
        
    
    }

    

    saveUser = ()=>{
    
        if(this.state.password > "" &&  this.state.password !== this.state.confirmPassword){
            alert("Senha e Confirmação de Senha Estão Distintas")
            return;
        }

      const user = {
            _id: this.props.user._id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            cpf: this.state.cpf,
            account: this.state.account,
            isActive:this.state.isActive,
            valueAccount: this.state.valueAccount,
            img: this.state.img
        }
        
        //const data = new FormData();
        //data.append("file", this.state.file); 
        //data.append("_id", user._id, ); 
        this.props.updateUser(this.props.user.token, user);
    }

    inputOnChange = (value, name) =>{
        this.setState({
                [name]: value,
                isSave: true
        });
    }



    
    selectImages = (event) => {
    
        const image = event.target.files[0]
        this.setState({ img: URL.createObjectURL(image),
                        file:image})
    }
    









    render(){
        const valueAccount = this.state.valueAccount > "" ? parseFloat(this.props.user.valueAccount) : 0 

        return (
            
            <div className="component box e">
        
                    <div className="addItemComponent componentScrolling">
                    
                        <div className = "groupInput" >
                            <label  className = "labelInput">Nome</label>
                            <input name = 'firstName' value = {this.state.firstName} type="text"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>

                        <div className = "groupInput" >
                            <label  className = "labelInput">Sobrenome</label>
                            <input name = 'lastName' value = { this.state.lastName} type="text"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>

                        <div className = "groupInput" >
                            <label  className = "labelInput">CPF</label>
                            <Cleave name = 'cpf' className = "inputForm" value = {this.state.cpf}  options={{numericOnly: true, blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-']}}   onChange={e => this.inputOnChange(e.target.rawValue, e.target.name)}/>
                        </div>

                        <div className = "groupInput" >
                            <label  className = "labelInput">Conta</label>
                            <input name = 'account' value = { this.state.account} type="text"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>
                   
                        <div className = "groupInput" >
                            <label className = "labelInput">Valor Atual Conta</label>
                            <label name = 'valueAccount' className="inputForm" >R$ {valueAccount.toLocaleString(undefined,{ minimumFractionDigits: 2 })}</label>
                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Email</label>
                            <label name = 'email' className="inputForm" >{ this.state.email}</label>
                        </div>
                        <div className = "groupInput" >
                            <label className = "labelInput">Alterar Senha</label>
                            <input name='password' className="inputForm" value = { this.state.password} type="password"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>

                        </div>
                        {this.state.password > '' &&
                            <div className = "groupInput" >
                                <label className = "labelInput">Confirmar Alteração de Senha</label>
                                <input name='confirmPassword' className="inputForm" value = { this.state.confirmPassword} type="password"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                            </div>
                        }



                        <div className = "groupInput" >
                            <div className = "inputForm groupUpload" >
                                <div className="foto">
                                        {this.state.img > '' && <img alt = "" className = "fotoImg" src={this.state.img}/> }
                                        {(this.state.img === '' || this.state.img === undefined) &&  <FontAwesomeIcon icon={faUser} size="5x"/>}
                                                                        
                                </div>
                                
                                <input className = "inputFormUpload" id="file-upload" type="file" onChange={this.selectImages} accept="image/*"/>
                                
                                <label htmlFor="file-upload" className="btn">
                                    <FontAwesomeIcon  icon={faUpload} size="2x"/>
                                </label>
                            </div>
          
                        </div>



                        {
                        this.state.isSave &&
                        <div className = "groupButton">
                            <button type = 'button' onClick={this.saveUser} className="btn">Salvar</button>
                        </div>
                        }

                    </div>
                



            </div>
                
        )
    }

}


const mapStateToProps = state => ({
    user: state.user,
});
  
const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);
