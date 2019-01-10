import React, { Component } from 'react'
import './Card.css';


class Card extends Component{
    constructor(props){
         super(props)

    }
    
    deleteCard = () => {
        this.props.deletefunction(this.props.data.id)
    }

    editCard = () => {
        this.props.editfunction(this.props.data)
    }

    render(){

        let imgLogo
        let typeDesc

        imgLogo  = require("./img/"+this.props.data.codCard+".png");

        if(this.props.data.type === '1'){
            typeDesc = 'Crédito';
        }else{
            typeDesc = 'Débito';
        }




        return (
            <div className = "card">
            
                <div className="imgContainerCard">
                        <img  alt = '' src={imgLogo} />                                                 
                </div>
                <div className="card-corp">
                    <span className="card-number txtScrolling">{this.props.data.number}</span> 
                    <span className="card-tp txtScrolling">{typeDesc}</span> 
                    <div className = 'groupButtonCard'>
                        <button onClick= {this.editCard} type = 'button' className = 'btnCard'>editar</button>  
                        <button onClick={this.deleteCard} type = 'button' className = 'btnCard'>excluir</button> 
                    </div>  
                </div>
            </div>
                
        )
    }



}

export default Card;
