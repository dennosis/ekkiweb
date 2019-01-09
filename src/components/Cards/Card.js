import React, { Component } from 'react'
import './Card.css';


import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as cardActions from '../actions/cards'


class Card extends Component{

    constructor(props){
        super(props)
      
        const qdata = props.data;
        const qimg  =require("./img/"+qdata.codCard+".png");

 console.log(props);

        var qdesc = '';
        if(qdata.type == '1'){
            qdesc = 'Crédito';

        }else{
            qdesc = 'Débito';
        }

          this.state = {
            id:qdata.id,
            codCard: qdata.codCard,
            type: qdata.type,
            number: qdata.number,
            codVerf: qdata.codeVerf,
            dtExp: qdata.dtExp,
            imgLogo:qimg,
            typeDesc: qdesc
        }


       this.deleteCard = this.deleteCard.bind(this);
    }
    

deleteCard(){

    this.props.deleteCard(this.props.data.id);
}



editCard = () => {
    this.props.testefunction(this.props.data)
}


    render(){
        return (
            <div className = "card">
            
                <div className="imgContainerCard">
                        <img  src={this.state.imgLogo} />                                                 
                </div>
                <div className="card-corp">
                    <span className="card-number txtScrolling">{this.state.number}</span> 
                    <span className="card-tp txtScrolling">{this.state.typeDesc}</span> 
                    <div className = 'groupButtonCard'>
                        <button onClick= {this.editCard} type = 'button' className = 'btnCard'>editar</button>  
                        <button onClick={this.deleteCard} type = 'button' className = 'btnCard'>excluir</button> 
                    </div>  
                </div>
            </div>
                
        )
    }



}

//

const mapStateToProps = state => ({
    cards: state.cards,
});
  
const mapDispatchToProps = dispatch => bindActionCreators(cardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card);

//export default Card;
