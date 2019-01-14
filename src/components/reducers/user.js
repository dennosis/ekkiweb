export default function user(state = [], action) {
    switch (action.type) {
    

        case 'LOGIN_SUCCESS':
            const quser = action.user
            return quser 
        
        case 'SAVE_SUCCESS':
            const saveuser = action.user
            return saveuser 

        case 'LOGOUT_SUCCESS':
        
            return action.user
        
        case 'REGISTER_SUCCESS':
        
            return action.user

        case "TRANSFER_VALUE":
            return action.user

      default:
        return state;
    }
  
  
}