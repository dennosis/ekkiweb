import React, { Component } from 'react'
import './Contacts.css';
import Contact from './Contact'

class Contacts extends Component{

    constructor(props){
        super(props)
          this.state = {
            isSearch:false,
            contacts:[
                {name:"Alberto Santos Dumont",
                cpf:"1545211515125",
                conta:"18188181",
                img:"https://www.escritas.org/autores/fernando-pessoa.jpg"},

                {name:"Alberto Santos Dumont",
                cpf:"1545211515125",
                conta:"18188181",
                img:"https://www.escritas.org/autores/fernando-pessoa.jpg"},

                {name:"Alberto Santos Dumont",
                cpf:"1545211515125",
                conta:"18188181",
                img:"https://www.escritas.org/autores/fernando-pessoa.jpg"},
                
                {name:"Alberto Santos Dumont",
                cpf:"1545211515125",
                conta:"18188181",
                img:"https://www.escritas.org/autores/fernando-pessoa.jpg"},
                
                {name:"Alberto Santos Dumont",
                cpf:"1545211515125",
                conta:"18188181",
                img:"https://www.escritas.org/autores/fernando-pessoa.jpg"},

                {name:"Alberto Santos Dumont",
                cpf:"1545211515125",
                conta:"18188181",
                img:"https://www.escritas.org/autores/fernando-pessoa.jpg"},
                {name:"Alberto Santos Dumont",
                cpf:"1545211515125",
                conta:"18188181",
                img:"https://www.escritas.org/autores/fernando-pessoa.jpg"},
                {name:"Alberto Santos Dumont",
                cpf:"1545211515125",
                conta:"18188181",
                img:"https://www.escritas.org/autores/fernando-pessoa.jpg"},
                {name:"Alberto Santos Dumont",
                cpf:"1545211515125",
                conta:"18188181",
                img:"https://www.escritas.org/autores/fernando-pessoa.jpg"}
            ]

        }

        this.searchItens = this.searchItens.bind(this);
    }






    searchItens(){

        this.setState({
            isSearch: !this.state.isSearch
        })
    }









    render(){

        return (
            
            <div className="component box e">
                <div className="titleComponent">
                        <span>Contatos</span>
                        <button onClick = {this.searchItens} className="btn">+</button>
                </div>
                
                {this.state.isSearch && 

                     <div className="addItemComponent">
                        <div className = "groupInput" >
                            <label className = "labelInput">Pesquisar Contatos</label>
                            <div className = 'groupInputSearch'>
                                <select className="inputForm">
                                    <option value="CPf">Cpf</option>
                                    <option value="Nome">Nome</option>
                                    <option value="Conta">Conta</option>
                                </select>
                                <input type="search" className="inputForm" placeholder="Pesquisar"/>
                                <button type="submit" className="btnSearch">Pesquisar</button>
                            </div>
                        </div>
                    </div>
                }

                
                <div className="corpComponent componentScrolling">
                        {this.state.contacts.map((contact, index) => <Contact  key={index} data={contact}/>)}
                </div>

            </div>
                
        )
    }
}


export default Contacts