
export default function cards(state = [], action) {
    switch (action.type) {
    

      case 'GET_CARDS':
                   
          return action.cards;
      
      case 'DELETE_CARD':
      
        return state.filter(item => item._id !== action.id);
        
            

      case 'CREATE_CARD':
          const card = action.card
          return [{...card}, ...state]


      case 'UPDATE_CARD':
        const cardup = action.card
        console.log(action.card)
        const qfilterup = state.filter(item => item._id !== cardup._id);
        const stateup = [{...cardup}, ...qfilterup]
        return stateup
    
    case 'FAILURE_CREATE_CARD':
        alert(action.error);
        return state;

    case 'FAILURE_DELETE_CARD':
        alert(action.error);
        return state;
        
    case 'FAILURE_UPDATE_CARD':
        alert(action.error);
        return state;
        
    case 'FAILURE_LOAD_CARDS':
        alert(action.error);
        return state;


         
      default:
        return state;
    }
  
  
}
  