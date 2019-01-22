export default function user(state = [], action) {
    switch (action.type) {
    
        case 'LOGIN_SUCCESS':
            alert("bem vindo")
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


        case "ALTER_VALUE_ACCOUNT":
            return {...state, valueAccount: action.value}


        case "FAILURE_UPDATE_USER":
            alert(action.error)
            return state

        case "REGISTER_FAILURE":
            alert(action.error)
            return state

        case "LOGIN_FAILURE":
            alert(action.error)
            return state

      default:
        return state;
    }
  
  
}