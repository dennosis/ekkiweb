export default function contacts(state = [], action) {
    switch (action.type) {

      case 'GET_CONTACTS':
        //const contacts = 
        return action.contacts

      case 'DELETE_CONTACT':
        //const qcontacts = state.filter(item => item._id !== action.id);
        return state.filter(item => item._id !== action.id);

      case 'FIND_CONTACTS':
        return action.contacts
      
      case 'ADD_CONTACT':
        let contactadd = state;
        contactadd.map(item => {
            if(item.idUserContact === action.contact.idUserContact){
              item.isContact = true;
              item._id = action.contact._id
            }
            return item
        })
        return [...contactadd]
       
      case 'FAILURE_LOAD_CONTACTS':
        alert(action.error);
        return state;
      
      case 'FAILURE_DELETE_CONTACT':
        alert(action.error);
        return state;

      case 'FAILURE_FIND_CONTACTS':
        alert(action.error);
        return state;
      
      case 'FAILURE_ADD_CONTACT':
        alert(action.error);
        return state;

      default:
        return state;
    }
  
  
}
  