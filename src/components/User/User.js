
import React, { Component } from 'react'
import './User.css';

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as cardActions from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//botoes icones
import {faUpload} from '@fortawesome/free-solid-svg-icons'


class User extends Component{
    constructor(props){
        super(props)


        console.log(props)
        /*
          this.state = {
            id: '',
            firstName: "",
            lastName: "",
            email: "",
            cpf: "",
            account: "",
            isActive:"" ,
            valueAccount: "",
            img: "",
            isSalve:false
        } */
        


        this.state = {
            id: this.props.user.id,
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email,
            password:this.props.user.password,
            cpf: this.props.user.cpf,
            account: this.props.user.account,
            isActive:this.props.user.isActive,
            valueAccount: this.props.user.valueAccount,
            img: this.props.user.img,
            isSave:false
        } 
    
    }
/*
    componentDidMount(){
        this.setState = {
            id: this.props.user.id,
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email,
            cpf: this.props.user.cpf,
            account: this.props.user.account,
            isActive:this.props.user.isActive,
            valueAccount: this.props.user.valueAccount,
            img: this.props.user.img
        }
    }
    */

    saveUser = ()=>{
      const upuser = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            cpf: this.state.cpf,
            account: this.state.account,
            isActive:this.state.isActive,
            valueAccount: this.state.valueAccount,
            img: this.state.img
        }


        this.props.updateUser(upuser.id, upuser);
    }

    inputOnChange = (value, name) =>{
        this.setState({
                [name]: value,
                isSave: true
        });
    }



    render(){
            
        return (
            
            <div className="component box e">
        
                    <div className="addItemComponent componentScrolling">
                    
                        <div className = "groupInput" >
                            <label  className = "labelInput">Nome</label>
                            <input name = 'firstName' value = {  this.state.firstName} type="text"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>

                        <div className = "groupInput" >
                            <label  className = "labelInput">Sobrenome</label>
                            <input name = 'lastName' value = { this.state.lastName} type="text"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>


                        <div className = "groupInput" >
                            <label  className = "labelInput">CPF</label>
                            <input name = 'cpf' value = { this.state.cpf} type="text"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>


                        <div className = "groupInput" >
                            <label  className = "labelInput">Conta</label>
                            <input name = 'account' value = { this.state.account} type="text"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>

                   
                        <div className = "groupInput" >
                            <label className = "labelInput">Valor Atual Conta</label>
                            <label name = 'valueAccount' className="inputForm" >{ this.state.valueAccount}</label>
                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Email</label>
                            <label name = 'email' className="inputForm" >{ this.state.email}</label>
                        </div>
                        <div className = "groupInput" >
                            <label className = "labelInput">Senha</label>
                            <input name='password' className="inputForm" value = { this.state.password} type="password"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>

                        </div>


                        <div className = "groupInput" >
                            <label className = "labelInput">Pemitir Déposito na Conta</label>
                                    <label className="switch">
                                    <input name='isActive' value = { this.state.isActive} type="checkbox"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                                    <span className="slider"></span>    
                            </label>

                        </div>


                        <div className = "groupInput" >
                            <div className = "inputForm groupUpload" >
                                <div className="foto">
                                        <img className = "fotoImg" src={ this.state.img}/>                                    
                                </div>
                                
                                <input className = "inputFormUpload" id="file-upload" type="file"/>
                                
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
  
const mapDispatchToProps = dispatch => bindActionCreators(cardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);


/*
<div className = "groupInput" >
<label className = "labelInput">Tipo Operação</label>
<select name ='type' value={this.state.cardEdit.type}  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}>
    <option value="1">Crédito</option>
    <option value="2">Débito</option>
</select>
</div>

























                        <div className = "groupInput" >
                            <label className = "labelInput">Data Vencimento</label>
                            <input name ='dtExp' value = {this.state.cardEdit.dtExp} type="date" className="inputForm" onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Cádigo Verificação</label>
                            <input name = 'codeVerf' value = {this.state.cardEdit.codeVerf} type="number" className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>


                        <div className = "groupInput" >
                            <label className = "labelInput">Pais</label>
                            <select name = 'country' value = {this.state.cardEdit.country} className="inputForm" onChange={e => this.inputOnChange(e.target.value, e.target.name)}>
                                <option value="1">Brasil</option>
                                <option value="2">Argentina</option>
                            </select>
                        </div>
*/