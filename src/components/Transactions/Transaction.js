import React, { Component } from 'react'
import './Transaction.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//botoes icones   faArrowAltCircleDown
import {faArrowAltCircleDown, faArrowAltCircleUp, faUser} from '@fortawesome/free-solid-svg-icons'

class Transaction extends Component{
    constructor(props) {
         super(props)
         this.state = {} 
    }

    render(){
        let formatdate

        const valueTot = this.props.data.value + this.props.data.valueCard;

        if(this.props.data.date > ''){
            var date = new Date(this.props.data.date)
            formatdate = ("00"+date.getDate()).slice(-2)+"/"+(("00"+date.getMonth()+1)).slice(-2)+"/"+date.getFullYear()+" "+("00"+date.getHours()).slice(-2)+":"+("00"+date.getMinutes()).slice(-2)
        }else{
            formatdate = ''
        }

        return (
            <div className = "transactionItem" >
            <div className="imgContainer2">
                 
                {this.props.data.img > '' && <img alt = "" src={this.props.data.img}/> }
                {(this.props.data.img === '' || this.props.data.img === undefined) &&  <FontAwesomeIcon icon={faUser} size="2x"/>}
                                          
            </div>
            <div className="transaction-corp">
                     <span className="transaction-name">{this.props.data.nameUser}</span>
                     <small className="transaction-date">{formatdate}</small>
                     <span className="transaction-value">R$ {valueTot.toLocaleString(undefined,{ minimumFractionDigits: 2 })}</span>
                     <div className="transaction-tipe">
                     
                     {this.props.data.typetransation === 1 && <FontAwesomeIcon icon={faArrowAltCircleUp} size="1x"/>}
                     {this.props.data.typetransation === 2 && <FontAwesomeIcon icon={faArrowAltCircleDown} size="1x"/> }
                     
                     
                    </div>
                                                
           </div>
      
      
      </div>
                
        )
    }



}

export default Transaction;

