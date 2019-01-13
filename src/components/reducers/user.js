export default function user(state = [], action) {
    switch (action.type) {
    

        case 'LOGIN_SUCCESS':
            const quser = action.user
            return quser 
        
        case 'SAVE_SUCCESS':
            const saveuser = action.user
            return saveuser 
        
      default:
        return state;
    }
  
  
}