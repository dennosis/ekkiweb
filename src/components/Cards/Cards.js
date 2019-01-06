import React, { Component } from 'react'
import './Cards.css';
import Card from './Card'
import api from '../Api'

class Cards extends Component{
    constructor(props){
        super(props)
          this.state = {
            isEdit:false,
            cards:[]

        }


        this.addItens = this.addItens.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.loadCards = this.loadCards.bind(this);
    }


    componentDidMount(){
        this.loadCards();
    }


    loadCards(){
        api.loadCards().then((res)=>{
            console.log(res.data)
        
            this.setState({
                cards: res.data
            })
          
        })
    }



    addItens(){

        this.setState({
            isEdit: !this.state.isEdit
        })
    }





    saveItem(){
        const newItem = {
            type: this.refs.type.value,
            codCard:'1',
            number: this.refs.number.value,
            codeVerf: this.refs.codeVerf.value,
            dtExp: this.refs.dtExp.value,
            country:this.refs.country.value
        }
        api.saveCard(newItem).then((res)=>{
            this.loadCards();
            this.setState({
                isEdit: !this.state.isEdit
            })
        })
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
                            <select ref ='type' className="inputForm">
                                <option value="1">Crédito</option>
                                <option value="2">Débito</option>
                            </select>
                        </div>

                        <div class = "groupInput" >
                            <label  class = "labelInput">Numero Cartão</label>
                            <input ref = 'number' type="number" class="inputForm"/>
                        </div>

                        <div class = "groupInput" >
                            <label class = "labelInput">Data Vencimento</label>
                            <input ref ='dtExp' type="date" class="inputForm"/>
                        </div>

                        <div class = "groupInput" >
                            <label class = "labelInput">Cádigo Verificação</label>
                            <input ref = 'codeVerf' type="number" class="inputForm"/>
                        </div>


                        <div className = "groupInput" >
                            <label className = "labelInput">Pais</label>
                            <select ref = 'country' className="inputForm">
                                <option value="1">Brasil</option>
                                <option value="2">Argentina</option>
                            </select>
                        </div>



                        <div class = "groupButton">
                            <button type = 'button' onClick = {this.saveItem} class="btn">Salvar</button>
                        </div>

                    </div>
                }




                {
                !this.state.isEdit &&
                
                <div className="corpComponent componentScrolling">
                        {this.state.cards.map((card, index) => <Card  key={index} data={card}/>)}
                </div>
                 }
            </div>
                
        )
    }
}


export default Cards