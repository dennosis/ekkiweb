import React, { Component } from 'react'
import './Transactions.css';
//import Contact from './Contact'


import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as transactionsActions from '../actions'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//botoes icones
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'




class Transactions extends Component{

    constructor(props){
        super(props)

        
          this.state = {
            isAddTransaction:false,
            transactionData:{
                idUserOrig:props.userId,
                idUserDest:'',
                operation:'',
                value:'',
                valuecard:'',
                idcard:'',
                date:'',
                isConfirmed:false,
            }
        }
    }



    componentDidMount(){
        this.props.getContacts();
        this.props.getCards();
        console.log(this.props)
     }



    createTransaction=()=>{
        const tmpdata = this.state.transactionData;
        this.props.createTransaction(this.props.userId, tmpdata)
    }

    addItens=()=>{
        this.setState({
            isAddTransaction: !this.state.isAddTransaction
        })
    }

/*
    addContact = async (idContact) => {
        const cantact = {idUser:idContact }
        await this.props.addContact(this.props.userId, cantact);
        //console.log(idContatct)
    }
*/

    inputOnChange = (value, name) =>{
        this.setState({
            transactionData: {
                ...this.state.transactionData,
                [name]: value
            }
        });
    }


    
    render(){
        return (
    
            <div className="component box e">
                <div className="titleComponent">
                        <span>Transações</span>
                        <FontAwesomeIcon onClick= {this.addItens} icon={faPlusSquare} size="2x"/>
                </div>
                
                {this.state.isAddTransaction && 

                     <div className="addItemComponent">
                        
                        <div className = "groupInput" >
                            <label className = "labelInput">Enviar Para:</label>
                            <select name = 'idUserDest' value = {this.state.transactionData.idUserDest} className="inputForm" onChange={e => this.inputOnChange(e.target.value, e.target.name)}>
                                    <option   value=''></option>
                                {
                                this.props.contacts.map((contact, index) => <option key={index}  value={contact.id}>{contact.firstName} - Conta:{contact.account}</option>) 
                                }
                            </select>
                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Catão</label>
                            <select name = 'idcard' value = {this.state.transactionData.idcard} className="inputForm" onChange={e => this.inputOnChange(e.target.value, e.target.name)}>
                                <option   value=''></option>
                                {
                                this.props.cards.map((card, index) => {
                                    var tmptype;
                                    if(card.tipe == 1){
                                        tmptype = 'Crédito'
                                    }else{
                                        tmptype = 'Débito'
                                    }
                                    return <option key={index}  value={card.id}>{card.number} - {tmptype}</option>
                                }) 
                                }
                            </select>
                        </div>



                        <div className = "groupInput" >
                            <label  className = "labelInput">Valor Transação</label>
                            <input name = 'value' value = {this.state.transactionData.value} type="number"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>



                        <div className = "groupButton">
                            <button type = 'button' onClick = {this.createTransaction} className="btn">Confirmar</button>
                            <button type = 'button' onClick = {this.addItens} className="btn">Cancelar</button>
                        </div>


                    </div>
                }

                {
                <div className="corpComponent componentScrolling">
                        {
                          // this.props.contacts.map((contact, index) => <Contact  key={index} data={contact} deletefunction = {this.deleteContact} addfunction = {this.addContact}/>) 
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
    contacts: state.contacts,
    cards: state.cards,
    transactions: state.transactions
});
  
const mapDispatchToProps = dispatch => bindActionCreators(transactionsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);//