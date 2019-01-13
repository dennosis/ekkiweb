export default function contacts(state = [], action) {
    switch (action.type) {

      case 'GET_CONTACTS':
        const contacts = action.contacts
        return contacts

      case 'DELETE_CONTACT':
        const qcontacts = state.filter(item => item.idContact !== action.id);
        return qcontacts;

      case 'FIND_CONTACTS':
        const tmpcontacts = action.contacts
        return tmpcontacts
      
      case 'ADD_CONTACT':
        
        var contactadd = state;
        contactadd.map(item => {
          if(item.id === action.contact.idUser){
            item.isContact = true;
            item.idContact = action.contact.id;
          }
        });
        
        
        return [...contactadd]

        
      default:
        return state;
    }
  
  
}
  