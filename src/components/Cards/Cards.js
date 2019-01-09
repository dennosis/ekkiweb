import React, { Component } from 'react'
import './Cards.css';
import Card from './Card'

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as cardActions from '../actions/cards'


class Cards extends Component{
    constructor(props){
        super(props)

        console.log(props);

          this.state = {
            isEdit:false,
            cardEdit:{            
                id:'',
                codCard:'',
                type: '',
                number: '',
                codVerf: '',
                dtExp: ''
            },
            isEditCard:false

        }

        
        this.addItens = this.addItens.bind(this);
        this.saveItem = this.saveItem.bind(this);
       // this.loadCards = this.loadCards.bind(this);
       /* this.deleteCard = this.deleteCard.bind(this);*/

       this.teste = this.teste.bind(this);
    }


    componentDidMount(){
       this.props.getCards();
    }




    addItens(){
     
        this.setState({
           isEdit: !this.state.isEdit
        });

    }


    async saveItem(){

        if(this.state.isEditCard){

            try {
               // const card = this.state.cardEdit;
                

                const card = {
                    id:this.state.cardEdit.id,
                    type: this.refs.type.value,
                    codCard:this.state.cardEdit.codCard,
                    number: this.refs.number.value,
                    codeVerf: this.refs.codeVerf.value,
                    dtExp: this.refs.dtExp.value,
                    country:this.refs.country.value
                
                }
                console.log(card);

                await this.props.updateCard(card);
                await this.setState({
                    isEdit: false,
                    isEditCard: false
                });
            }catch(err) {
                alert(err); // TypeError: failed to fetch
            }

        }else{
            const newItem = {
                type: this.refs.type.value,
                codCard:'1',
                number: this.refs.number.value,
                codeVerf: this.refs.codeVerf.value,
                dtExp: this.refs.dtExp.value,
                country:this.refs.country.value
            }

            try {
                await this.props.createCard(newItem);
                await this.setState({
                    isEdit: false
                });
            }catch(err) {
                alert(err); // TypeError: failed to fetch
            }
        }
    }



    teste(cardedit){
        this.setState({
            cardEdit: {
                id:cardedit.id,
                codCard:cardedit.codCard,
                type: cardedit.type,
                number: cardedit.number,
                codeVerf: cardedit.codeVerf,
                dtExp: cardedit.dtExp  
            },
            isEdit: true,
            isEditCard:true
        });

        console.log(cardedit);
/*


        this.refs.type.value = this.state.cardEdit.type,
        this.refs.number.value = this.state.cardEdit.number,
        this.refs.codeVerf.value = this.state.cardEdit.codeVerf,
        this.refs.dtExp.value = this.state.cardEdit.dtExp,
        this.refs.country.value = this.state.cardEdit.country
*/







        //alert(textid);
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
                            <select ref ='type' className="inputForm" value = {this.state.cardEdit.type}>
                                <option value="1">Crédito</option>
                                <option value="2">Débito</option>
                            </select>
                        </div>

                        <div className = "groupInput" >
                            <label  className = "labelInput">Numero Cartão</label>
                            <input ref = 'number' type="number"  className="inputForm" value = {this.state.cardEdit.number}/>
                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Data Vencimento</label>
                            <input ref ='dtExp' type="date" className="inputForm" value = {this.state.cardEdit.dtExp}/>
                        </div>

                        <div className = "groupInput" >
                            <label className = "labelInput">Cádigo Verificação</label>
                            <input ref = 'codeVerf' type="number" className="inputForm" value = {this.state.cardEdit.codeVerf}/>
                        </div>


                        <div className = "groupInput" >
                            <label className = "labelInput">Pais</label>
                            <select ref = 'country' className="inputForm" >
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
                        {this.props.cards.map((card) => <Card  key={card.id} data={card} testefunction = {this.teste}/>)}
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
