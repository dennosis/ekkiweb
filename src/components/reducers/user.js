export default function user(state = [], action) {
    switch (action.type) {
    
        case 'LOGIN_SUCCESS':
            return action.user 
        
        case 'SAVE_SUCCESS':
            return {...action.user,
                     token:  state.token
                    }       

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