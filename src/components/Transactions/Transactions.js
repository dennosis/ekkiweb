import React, { Component } from 'react'
import './Transactions.css';
//import Contact from './Contact'


import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as transactionsActions from '../actions'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//botoes icones
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import Transaction from './Transaction';




class Transactions extends Component{

    constructor(props){
        super(props)
        
        
          this.state = {
            isAddTransaction:false,
            transactionData:{
                idUserOrig:this.props.userId,
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
        this.props.getContacts(this.props.userId);
        this.props.getCards(this.props.userId);
        this.props.getTransactions(this.props.userId);
        //console.log(this.props)
     }

    validFields = () =>{
        if(this.state.transactionData.idUserDest == ''){
            alert("O Usuario deve ser preenchido")    
            return false
        }else if(this.state.transactionData.value == ''){
            alert("O Valor deve ser Preenchido")    
            return false
        }else if((this.props.userValueAccount < this.state.transactionData.value) && this.state.transactionData.idcard ==""){
            alert("O Valor da tranferencia excede a Conta, Selecionar um Cartão")    
            return false
        }

        return true
    }

    createTransaction= async ()=>{
        if(this.validFields()){
            const tmpdata = this.state.transactionData;
            tmpdata.date = new Date();
            
            var varcard;
            var valuedesc;
            if((parseFloat(this.props.userValueAccount) - parseFloat(tmpdata.value)) >= 0 ){
                varcard = 0
                valuedesc = parseFloat(tmpdata.value)
            }else{
                varcard = parseFloat(tmpdata.value) - parseFloat(this.props.userValueAccount)
                valuedesc = parseFloat(this.props.userValueAccount)
            }

            tmpdata.valuecard = varcard;
            
            await this.props.createTransaction(this.props.userId, tmpdata)
            await this.props.tranferValue(tmpdata.idUserOrig,tmpdata.idUserDest,tmpdata.value,valuedesc)
            await this.setState({
                isAddTransaction: false
            })
        }
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

                
                <div className="corpComponent componentScrolling corpComponentTransactions">
                        {
                           this.props.transactions.map((transaction, index) => <Transaction  key={index} data={transaction} />) 
                        }
                </div>
                

            </div>
                
        )
    }
}


//export default Contacts

const mapStateToProps = state => ({
    userId: state.user.id,
    userValueAccount: state.user.valueAccount,
    contacts: state.contacts,
    cards: state.cards,
    transactions: state.transactions
});
  
const mapDispatchToProps = dispatch => bindActionCreators(transactionsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);//