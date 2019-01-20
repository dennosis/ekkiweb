
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
        const qfilterup = state.filter(item => item._id !== cardup._id);
        const stateup = [{...cardup}, ...qfilterup]
        return stateup
        
        
      default:
        return state;
    }
  
  
}
  