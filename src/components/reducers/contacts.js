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

        
      default:
        return state;
    }
  
  
}
  