import api from '../Api'

export function getContacts(token) {
    return dispatch => {
        api.getContacts(token)
            .then(
                res => { 
                    dispatch(success(res.data.contacts));
                },
                error=>{
                    dispatch(failure(error.response.data.error));
                } 
        );
    };

    function success(contacts) { return { type: 'GET_CONTACTS', contacts }}
    function failure(error) { return { type: 'FAILURE_LOAD_CONTACTS', error}} 
}


export function deleteContact(idUser, idContact) {
    return dispatch => {
        api.deleteContact(idUser, idContact)
            .then(
                res => { 
                    dispatch(success(idContact));
                }, 
                error => {
                    dispatch(failure(error.response.data.error));
                }
            )
    };

    function success(id) { return { type: 'DELETE_CONTACT', id} }
    function failure(error) { return { type: 'FAILURE_DELETE_CONTACT', error} }
}




export function findContacts(token, find) {

    return dispatch => {

        api.findContacts(token, find)
            .then(
                res => { 
                dispatch(success(res.data.contacts));
                console.log(res.data)
                },
                error=>{
                    dispatch(failure(error.response.data.error));
                } 
        
            );
    }

    function success(contacts) { return { type: 'FIND_CONTACTS', contacts } }
    function failure(error) { return { type: 'FAILURE_FIND_CONTACTS', error } }
}



export function addContact(token, idContact) {
    return dispatch => {
        api.addContact(token, idContact)
            .then(
                res => { 
                    dispatch(success(res.data));
                },
                error=>{
                    dispatch(failure(error.response.data.error));
                }
            );
    }

    function success(contact) { return { type: 'ADD_CONTACT', contact} }
    function failure(error) { return { type: 'FAILURE_ADD_CONTACT', error} }
}









/*


export function getContacts(idUser) {
    return dispatch => {
        api.getContacts(idUser)
            .then((res) => { 
                
                    var contacts = [];
                    contacts = res.data.map(function(element) {

                           return api.getUserById(element.idUser)
                                .then(resp => {
                                    //console.log(resp.data)

                                    return {
                                        id:resp.data.id, 
                                        idContact:element.id, 
                                        firstName:resp.data.firstName,
                                        lastName:resp.data.lastName,
                                        cpf:resp.data.cpf,
                                        account:resp.data.account,
                                        img:resp.data.img,
                                        isContact:true
                                    }   
                                })
                            
                        });
                            
                        
    
                    //resolve todas as promisses e retorna seus valores
                    Promise.all(contacts).then(function(values) {
                        dispatch(success(values));
                    });
                    
                    
                } 
            );
    };

    function success(contacts) { return { type: 'GET_CONTACTS', contacts } }
}
*/




/*



export function findContacts(idUser, find, type) {
    return dispatch => {


        if(type === 'name'){

        //const {first, last} = find

            api.getUserByName(idUser, find.first, find.last)
                .then((res) => { 
                
                    var contacts = [];
                    console.log(res.data)
                    contacts = res.data.map((element)=>{
                        
                        return editObj(element)
                    });
    
                    Promise.all(contacts).then(function(values) {
                        dispatch(success(values));
                    });
                    //dispatch(success(success));
                    
                } 
            );

        }else if(type === 'account'){

            api.getUserByAccount(idUser, find)
                .then((res) => { 
                
                    var contacts = [];
                    contacts = res.data.map((element)=>{
                        return editObj(element)
                    });
    
                    Promise.all(contacts).then(function(values) {
                        dispatch(success(values));
                    });
                    
                    
                } 
            );

        }else if(type === 'cpf'){

            api.getUserByCpf(idUser, find)
                .then((res) => { 
                
                    var contacts = [];
                    contacts = res.data.map((element)=>{
                        return editObj(element)
                    });
    
                    Promise.all(contacts).then(function(values) {
                        dispatch(success(values));
                    });
                    
                    
                } 
            );
        }

    };

    function editObj(element){
            return api.getContactById(idUser, element.id)
                 .then(resp => {
                     //console.log(resp);
                     //console.log(element);
                    var isContact
                    var idContact
                    if(resp.data.length === 0){
                        isContact = false;
                        //idContact = ''
                        
                    }else{
                        console.log(resp.data[0])
                        isContact = true;
                        idContact = resp.data[0].id
                    }

                    return {
                         id:element.id, 
                         idContact:idContact, 
                         firstName:element.firstName,
                         lastName:element.lastName,
                         cpf:element.cpf,
                         account:element.account,
                         img:element.img,
                         isContact: isContact
                     }   
                 })
        
    }

    
    function success(contacts) { return { type: 'FIND_CONTACTS', contacts } }
}
*/