import React, { Component } from 'react'
import './Contact.css';


class Contact extends Component{

    constructor(props){
        super(props)
      
        this.state = props.data;

        /*
          this.state = {
            name:props.data.name,
            cpf:props.data.cpf,
            conta:props.data.conta,
            img:props.data.img
        }
        */
        


    }
    
    render(){
        return (
            <div className = "contact">
                <div className="imgContainer2">
                        <img  src={this.state.img} />                                                 
                </div>
                <div className="contact-corp">
                    <span className="contact-name txtScrolling">{this.state.name}</span>     
                    <small className="contact-cpf txtScrolling">CPF: {this.state.cpf}</small>
                    <small className="contact-conta txtScrolling">Conta: {this.state.conta}</small>               
                </div>
            </div>
                
        )
    }



}


export default Contact