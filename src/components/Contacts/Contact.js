import React, { Component } from 'react'
import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//botoes icones
import { faPlusCircle, faTrashAlt, faUser} from '@fortawesome/free-solid-svg-icons'



class Contact extends Component{

    constructor(props){
        super(props)
      

        
        this.state = {
            name:props.data.name,
            cpf:props.data.cpf,
            conta:props.data.conta,
            img:props.data.img
        }
        
        


    }
    

    deleteContact = () => {
        this.props.deletefunction(this.props.data._id)
    }

    addContact = () => {
        this.props.addfunction(this.props.data.idUserContact)
    }


    render(){
        return (
            <div className = "contact">
                <div className="imgContainer2">
                        {this.props.data.img > '' && <img alt = "" src={this.props.data.img}/> }
                        {this.props.data.img === '' &&  <FontAwesomeIcon icon={faUser} size="2x"/>}                                                
                </div>
                <div className="contact-corp">
                    <span className="contact-name txtScrolling">{this.props.data.firstName +" "+ this.props.data.lastName}</span>     
                    <small className="contact-cpf txtScrolling">CPF: {this.props.data.cpf}</small>
                    <small className="contact-conta txtScrolling">Conta: {this.props.data.account}</small>  
                    <div className = 'groupButtonContact'>
                        {this.props.data.isContact && <FontAwesomeIcon onClick={this.deleteContact}  icon={faTrashAlt} size="1x"/>}
                        {!this.props.data.isContact && <FontAwesomeIcon onClick={this.addContact}  icon={faPlusCircle} size="1x"/>}
                    </div>               
                </div>
            </div>
                
        )
    }



}


export default Contact

