import React, { Component } from 'react'
import './Card.css';


class Card extends Component{

    constructor(props){
        super(props)
      
        const qdata = props.data;
        const qimg  = require("./img/"+qdata.codCard+".png");

        var qdesc = '';
        if(qdata.type == '1'){
            qdesc = 'Crédito';

        }else{
            qdesc = 'Débito';
        }

          this.state = {
            codCard: qdata.codCard,
            type: qdata.type,
            number: qdata.number,
            codVerf: qdata.codeVerf,
            dtExp: qdata.dtExp,
            imgLogo:qimg,
            typeDesc: qdesc
        }

    }
    
    render(){
        return (
            <div className = "contact">
            
                <div className="imgContainerCard">
                        <img  src={this.state.imgLogo} />                                                 
                </div>
                <div className="contact-corp">
                <span className="contact-name txtScrolling">{this.state.number}</span> 
                <span className="contact-cpf txtScrolling">{this.state.typeDesc}</span> 
                                    
                </div>
            
            </div>
                
        )
    }



}


export default Card