import React, { Component } from 'react'
import './Cards.css';
import Card from './Card'

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as cardActions from '../actions/cards'


class Cards extends Component{
    constructor(props){
        super(props)

        //console.log(props);

          this.state = {
            isEdit:false,
            cardEdit:{            
                id:'',
                codCard:'',
                type: '',
                number: '',
                codeVerf: '',
                dtExp: '',
                country:''
            },
            isEditCard:false

        }

        //this.deleteCard = this.deleteCard.bind(this);
        //this.addItens = this.addItens.bind(this);
        //this.saveItem = this.saveItem.bind(this);
       //this.editCard = this.editCard.bind(this);
       //this.inputOnChange = this.inputOnChange.bind(this);
       
    }


    componentDidMount(){
       this.props.getCards();
    }

    addItens = () => {
     
        this.setState({
           isEdit: !this.state.isEdit
        });

        this.emptyEditCard();
        
    }




     saveItem = async () => {

        if(this.state.isEditCard){

            try {

                await this.props.updateCard(this.state.cardEdit);
                await this.emptyEditCard();
                await this.setState({
                    isEdit: false,
                    isEditCard: false
                });
                
            }catch(err) {
                alert(err); 
            }

        }else{
            const newItem = {
                type: this.state.cardEdit.type,
                codCard:'1',
                number: this.state.cardEdit.number,
                codeVerf: this.state.cardEdit.codeVerf,
                dtExp: this.state.cardEdit.dtExp,
                country:this.state.cardEdit.country
            }

            try {
                await this.props.createCard(newItem);
                await this.emptyEditCard();
                await this.setState({
                    isEdit: false
                });
            }catch(err) {
                alert(err); // TypeError: failed to fetch
            }
        }
    }



     deleteCard = async (id) => {
        await this.props.deleteCard(id);
    }


    editCard = (cardedit) =>{
        this.setState({
            cardEdit:{
                id:cardedit.id,
                codCard:cardedit.codCard,
                type: cardedit.type,
                number: cardedit.number,
                codeVerf: cardedit.codeVerf,
                dtExp: cardedit.dtExp,
                country: cardedit.country
            },
            isEdit: true,
            isEditCard:true
        });
    }

    inputOnChange = (value, name) =>{
        this.setState({
            cardEdit: {
                ...this.state.cardEdit,
                [name]: value
            }
        });
    }

    emptyEditCard = () =>{
        this.setState({
            cardEdit:{            
                id:'',
                codCard:'',
                type: '',
                number: '',
                codeVerf: '',
                dtExp: '',
                country:''
            }
        });
    }

    render(){
        
        return (
            
            <div className="component box e">
                <div className="titleComponent">
                        <span>Cartões</span>
                        <button onClick = {this.addItens} className="btn">+</button>
                </div>
        
                {
                    this.state.isEdit && 

                     <div className="addItemComponent componentScrolling">
                        <div className = "groupInput" >
                            <label className = "labelInput">Tipo Operação</label>
                            <select name ='type' value={this.state.cardEdit.type}  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}>
                                <option value="1">Crédito</option>
                                <option value="2">Débito</option>
                            </select>
                        </div>

                        <div className = "groupInput" >
                            <label  className = "labelInput">Numero Cartão</label>
                            <input name = 'number' value = {this.state.cardEdit.number} type="number"  className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Data Vencimento</label>
                            <input name ='dtExp' value = {this.state.cardEdit.dtExp} type="date" className="inputForm" onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Cádigo Verificação</label>
                            <input name = 'codeVerf' value = {this.state.cardEdit.codeVerf} type="number" className="inputForm"  onChange={e => this.inputOnChange(e.target.value, e.target.name)}/>
                        </div>


                        <div className = "groupInput" >
                            <label className = "labelInput">Pais</label>
                            <select name = 'country' value = {this.state.cardEdit.country} className="inputForm" onChange={e => this.inputOnChange(e.target.value, e.target.name)}>
                                <option value="1">Brasil</option>
                                <option value="2">Argentina</option>
                            </select>
                        </div>



                        <div className = "groupButton">
                            <button type = 'button' onClick = {this.saveItem} className="btn">Salvar</button>
                        </div>

                    </div>
                }

                {
                !this.state.isEdit &&
                
                <div className="corpComponent componentScrolling">
                        {this.props.cards.map((card) => <Card  key={card.id} data={card} editfunction = {this.editCard} deletefunction = {this.deleteCard}  />)}
                </div>
                }
            </div>
                
        )
    }
}





const mapStateToProps = state => ({
    cards: state.cards,
});
  
const mapDispatchToProps = dispatch => bindActionCreators(cardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
