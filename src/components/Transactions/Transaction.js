import React, { Component } from 'react'
import './Transaction.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//botoes icones   faArrowAltCircleDown
import {faTrashAlt, faArrowAltCircleDown, faArrowAltCircleUp, faUser} from '@fortawesome/free-solid-svg-icons'

class Transaction extends Component{
    constructor(props) {
         super(props)
    }

    render(){
        var formatdate

        if(this.props.data.date > ''){
            var date = new Date(this.props.data.date)
            formatdate = ("00"+date.getDate()).slice(-2)+" / "+(("00"+date.getMonth()+1)).slice(-2)+" / "+date.getFullYear()+" "+("00"+date.getHours()).slice(-2)+":"+("00"+date.getMinutes()).slice(-2)
        }else{
            formatdate = ''
        }

        return (
            <div className = "transactionItem" >
            <div className="imgContainer2">
                 
                {this.props.data.img > '' && <img alt = "" src={this.props.data.img}/> }
                {this.props.data.img === '' &&  <FontAwesomeIcon icon={faUser} size="2x"/>}
                                          
            </div>
            <div className="transaction-corp">
                     <span className="transaction-name">{this.props.data.nameUser}</span>
                     <small className="transaction-date">{formatdate}</small>
                     <span className="transaction-value">R$ {this.props.data.value}</span>
                     <div className="transaction-tipe">
                     
                     {this.props.data.typetransation == 1 && <FontAwesomeIcon icon={faArrowAltCircleUp} size="1x"/>}
                     {this.props.data.typetransation == 2 && <FontAwesomeIcon icon={faArrowAltCircleDown} size="1x"/> }
                     
                     
                    </div>
                                                
           </div>
      
      
      </div>
                
        )
    }



}

export default Transaction;


/*<FontAwesomeIcon icon={cardcreditico} size="3x"/>*/


/*
id,
idUser,
nameUser: resp.data.firstName,
account: resp.data.account,
typetransation,
value,
idcard,
valuecard,
date,
isConfirmed
*/

/*
<svg viewBox="0 0 100 100">
                        <path d="M25 0
                                 L25 25		
                                 L0 25 
                                 L50 100 
                                 L100 25 
                                 L75 25
                                 L75 0
                                 Z" 
                              fill="#10B287"/>
                      </svg>
                      */