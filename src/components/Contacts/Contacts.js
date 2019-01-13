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
        this.props.getContacts();
     }


    getUserbId=(id)=>{

        this.setState({
            isSearch: !this.state.isSearch
        })

     
    }


    searchItens=()=>{

        this.setState({
            isSearch: !this.state.isSearch
        })

        if(this.state.isSearch){
            this.props.getContacts();
        }
    }



    deleteContact = async (idContatct) => {
        await this.props.deleteContact(this.props.userId, idContatct);
        //console.log(idContatct)
    }

    addContact = async (idContact) => {
        const cantact = {idUser:idContact }
        await this.props.addContact(this.props.userId, cantact);
        //console.log(idContatct)
    }


    inputOnChange = (value, name) =>{
        this.setState({
            searchData: {
                ...this.state.searchData,
                [name]: value
            }
        });
        //console.log(this.state)
    }


    findUser = async () =>{
            if(this.state.searchData.type === 'name'){

                var first = this.state.searchData.data.split(' ')[0]
                var last = this.state.searchData.data.split(' ')
                last.shift()
                last = last.join(' ')
                //console.log(first)
                //console.log(last)
                const username = {first, last}
                console.log(username)
                this.props.findContacts(this.props.userId, username, this.state.searchData.type);

            }else{

                this.props.findContacts(this.props.userId, this.state.searchData.data, this.state.searchData.type);

            }
        

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
                        {/*this.state.contacts.map((contact, index) => <Contact  key={index} data={contact}/>)*/
                           this.props.contacts.map((contact, index) => <Contact  key={index} data={contact} deletefunction = {this.deleteContact} addfunction = {this.addContact}/>) 
                        }
                </div>
                }

            </div>
                
        )
    }
}


//export default Contacts

const mapStateToProps = state => ({
    userId: state.user.id,
    contacts: state.contacts
});
  
const mapDispatchToProps = dispatch => bindActionCreators(contactsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);//