import React, { Component } from 'react'
import './Card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//icones das bandeiras dos cartoes
import { faCcAmex, faCcJcb, faCcDinersClub, faCcVisa, faCcMastercard, faCcDiscover } from '@fortawesome/free-brands-svg-icons'
import { faCreditCard} from '@fortawesome/free-solid-svg-icons'

//botoes icones
import { faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

class Card extends Component{
    constructor(props) {
         super(props)
    }
    
    
    deleteCard = () => {
        this.props.deletefunction(this.props.data.id)
    }

    editCard = () => {
        this.props.editfunction(this.props.data)
    }

    render(){

        //let imgLogo
        let typeDesc

        //imgLogo  = require("./img/"+this.props.data.codCard+".png");

        if(this.props.data.type === '1'){
            typeDesc = 'Crédito';
        }else{
            typeDesc = 'Débito';
        }
        
        var cardcreditico;
        if(this.props.data.number.substring(0, 2) === '34'){
            cardcreditico = faCcAmex

        }else if(this.props.data.number.substring(0, 2) === '35'){
            cardcreditico = faCcJcb

        }else if(this.props.data.number.substring(0, 3) === '300'){
            cardcreditico = faCcDinersClub

        }else if(this.props.data.number.substring(0, 1) === '4'){
            cardcreditico = faCcVisa

        }else if(this.props.data.number.substring(0, 2) === '51'){
            cardcreditico = faCcMastercard
        
        }else if(this.props.data.number.substring(0, 5) === '6011'){
            cardcreditico = faCcDiscover

        }else{
            cardcreditico = faCreditCard
        }

        return (
            <div className = "card">
                <FontAwesomeIcon icon={cardcreditico} size="3x"/>
     
                <div className="card-corp">
                    <span className="card-number txtScrolling">{this.props.data.number}</span> 
                    <span className="card-tp txtScrolling">{typeDesc}</span> 
                    <div className = 'groupButtonCard'>
                        <FontAwesomeIcon onClick= {this.editCard} icon={faPencilAlt} size="1x"/>
                        <FontAwesomeIcon onClick={this.deleteCard} icon={faTrashAlt} size="1x"/>
                    </div>  
                </div>
            </div>
                
        )
    }



}

export default Card;

/*
                        <button onClick= {this.editCard} type = 'button' className = 'btnCard'>editar</button>  
                        <button onClick={this.deleteCard} type = 'button' className = 'btnCard'>excluir</button> 

                        <div className="imgContainerCard">
                        <FontAwesomeIcon icon={cardcreditico} size="3x"/>
                                                                        
                </div>
                */