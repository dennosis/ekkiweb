export default function user(state = [], action) {
    switch (action.type) {
    

      case 'LOGIN_SUCCESS':
            const quser = action.user
          return quser;
    
        
      default:
        return state;
    }
  
  
}