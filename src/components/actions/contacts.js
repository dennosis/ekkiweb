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
