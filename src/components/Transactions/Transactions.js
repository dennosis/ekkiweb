import React, { Component } from 'react'
import './Transactions.css';


import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as transactionsActions from '../actions'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//botoes icones
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import Transaction from './Transaction';

import Cleave from 'cleave.js/react';


class Transactions extends Component{

    constructor(props){
        super(props)
        
        
          this.state = {
            isAddTransaction:false,
            transactionData:{
                userDest:'',
                value:0,
                valueCard:0,
                card:'',
                password:''
            }
        }
    }

   /*
    operation:
        1 - tranferencia nomal
        2 - transferencia parcial normal, parcial cartao
        3 - transferencia somente cartao
    */

    
    componentDidMount(){
        this.props.getContacts(this.props.token);
        this.props.getCards(this.props.token);
        this.props.getTransactions(this.props.token);
    }

    componentWillReceiveProps(){
        this.setState({
            isAddTransaction: false
        })
    }


    createTransaction= async ()=>{
        let operation
        if(this.state.transactionData.value > 0 && this.state.transactionData.card > ""){
            operation = 2
        }else if(this.state.transactionData.value > 0){
            operation = 1
        }else if(this.state.transactionData.card > ""){
            operation = 3
        }else{
            operation = 0
        }

        const tmpdata = this.state.transactionData;
        await this.props.createTransaction(this.props.token, {...tmpdata, operation} )
    }

    addItens=()=>{
        this.setState({
            isAddTransaction: !this.state.isAddTransaction
        })
    }

    inputOnChange = (value, name) =>{
    
        this.setState({
            transactionData: {
                ...this.state.transactionData,
                [name]: value
            }
        });
    }


    
    render(){

        const valueCard = this.state.transactionData.valueCard > "" ? parseFloat(this.state.transactionData.valueCard) : 0 
        const value = this.state.transactionData.value > "" ? parseFloat(this.state.transactionData.value) : 0 

        const isPassword = ((valueCard + value) > 1000)

        console.log(this.state.transactionData)

        return (
    
            <div className="component box e">
                <div className="titleComponent">
                        <span>Transações</span>
                        <FontAwesomeIcon onClick= {this.addItens} icon={faPlusSquare} size="2x"/>
                </div>
                
                {this.state.isAddTransaction && 

                    <div className="addItemComponent componentScrolling">
                        
                        <div className = "groupInput" >
                            <label className = "labelInput">Enviar Para:</label>
                            <select name = 'userDest' value = {this.state.transactionData.userDest} className="inputForm" onChange={e => this.inputOnChange(e.target.value, e.target.name)}>
                                <option value=''></option>
                                {
                                    this.props.contacts.map((contact, index) => <option key={index}  value={contact.idUserContact}> {contact.firstName} - Conta:{contact.account}</option>) 
                                }
                            </select>
                        </div>


                        <div className = "groupInput" >
                            <label  className = "labelInput">Valor Transação</label>
                            <Cleave name = 'value' className = "inputForm" value = {this.state.transactionData.value}  options={{numeral: true, numeralIntegerScale: 5, numeralDecimalScale: 2, numeralDecimalMark: ',', delimiter: '.',  prefix: 'R$ ',rawValueTrimPrefix: true}}   onChange={e => this.inputOnChange(e.target.rawValue, e.target.name)}/>
                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Catão</label>
                            <select name = 'card' value = {this.state.transactionData.card} className="inputForm" onChange={e => this.inputOnChange(e.target.value, e.target.name)}>
                                <option   value=''></option>
                                {
                                this.props.cards.map((card, index) => {
                                    var tmptype;
                                    if(card.tipe === 1){
                                        tmptype = 'Crédito'
                                    }else{
                                        tmptype = 'Débito'
                                    }
                                    return <option key={index}  value={card._id}>{card.number} - {tmptype}</option>
                                }) 
                                }
                            </select>
                        </div>
                        {this.state.transactionData.card > '' &&
                            <div className = "groupInput" >
                                <label  className = "labelInput">Valor Cartão</label>
                                <Cleave name = 'valueCard' className = "inputForm" value = {this.state.transactionData.valueCard}  options={{numeral: true, numeralIntegerScale: 5, numeralDecimalScale: 2, numeralDecimalMark: ',', delimiter: '.',  prefix: 'R$ ', rawValueTrimPrefix: true}}   onChange={e => this.inputOnChange(e.target.rawValue, e.target.name)}/>
                            </div>
                        }

                        {isPassword &&
                            <div className = "groupInput" >
                                <label  className = "labelInput">Senha</label>
                                <input name = 'password' value = {this.state.transactionData.password} type="password"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                            </div>
                        }


                        <div className = "groupButton">
                            <button type = 'button' onClick = {this.createTransaction} className="btn">Confirmar</button>
                            <button type = 'button' onClick = {this.addItens} className="btn">Cancelar</button>
                        </div>


                    </div>
                }

                {!this.state.isAddTransaction &&
                    <div className="corpComponent componentScrolling corpComponentTransactions">
                            {
                            this.props.transactions.map((transaction, index) => <Transaction  key={index} data={transaction} />) 
                            }
                    </div>
                }
                

            </div>
                
        )
    }
}


const mapStateToProps = state => ({
    token: state.user.token,
    contacts: state.contacts,
    cards: state.cards,
    transactions: state.transactions
});
  
const mapDispatchToProps = dispatch => bindActionCreators(transactionsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);



