import React, { Component } from 'react'
import './Contacts.css';
import Contact from './Contact'


import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as contactsActions from '../actions/contacts'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//botoes icones
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'




class Contacts extends Component{

    constructor(props){
        super(props)
          this.state = {
            isSearch:false,
            searchData:{
                type:'name',
                data:''
            }
        }
    }

    componentDidMount(){
        this.props.getContacts(this.props.token);
     }

    searchItens=()=>{
        this.setState({
            isSearch: !this.state.isSearch
        })

        if(this.state.isSearch){
            this.props.getContacts(this.props.token);
        }
    }


    deleteContact = async (idContatct) => {
        await this.props.deleteContact(this.props.token, idContatct);
    }

    addContact = (idContact) => {
        const cantact = {contact:idContact}
        this.props.addContact(this.props.token, cantact);

    }


    inputOnChange = (value, name) =>{
        this.setState({
            searchData: {
                ...this.state.searchData,
                [name]: value
            }
        });
    }


    findUser = () =>{
        const find =   { [this.state.searchData.type]:this.state.searchData.data}
        this.props.findContacts(this.props.token, find);
    }

    render(){
        return (
    
            <div className="component box e">
                <div className="titleComponent">
                        <span>Contatos</span>
                        <FontAwesomeIcon onClick= {this.searchItens} icon={faPlusSquare} size="2x"/>

                </div>
                
                {this.state.isSearch && 

                     <div className="addItemComponent">
                        <div className = "groupInput" >
                            <label className = "labelInput">Pesquisar Contatos</label>
                            <div className = 'groupInputSearch'>
                                <select name = 'type' className="inputForm" value={this.state.searchData.type} onChange={e => this.inputOnChange(e.target.value, e.target.name)}>
                                    <option value="cpf">Cpf</option>
                                    <option value="name">Nome</option>
                                    <option value="account">Conta</option>
                                </select>
                                <input name = 'data' type="search" className="inputForm" placeholder="Pesquisar" value={this.state.searchData.data} onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                                <button onClick = {this.findUser} type="button" className="btnSearch">Pesquisar</button>
                            </div>
                        </div>
                    </div>
                }

                {
                <div className="corpComponent componentScrolling">
                        {
                           
                           this.props.contacts.map((contact, index) => <Contact  key={index} data={contact} deletefunction = {this.deleteContact} addfunction = {this.addContact}/>) 

                       }
                </div>
                }

            </div>
                
        )
    }
}




const mapStateToProps = state => ({
    token: state.user.token,
    userId: state.user.id,
    contacts: state.contacts
});
  
const mapDispatchToProps = dispatch => bindActionCreators(contactsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);//