
export default function cards(state = [], action) {
    switch (action.type) {
    

      case 'GET_CARDS':
            const cards = action.cards
            //console.log(cards)        
          return cards;
      
      case 'DELETE_CARD':
      
        const qcards = state.cards.filter(item => item.id !== action.id);
        
        
        return {...state,cards: qcards};
            

      case 'CREATE_CARD':
          const card = action.card
          const qstate = [{...card}, ...state]
          return qstate

      case 'UPDATE_CARD':
        const cardup = action.card
        const qfilterup = state.filter(item => item.id !== cardup.id);
        const stateup = [{...cardup}, ...qfilterup]
        return stateup
        
        
      default:
        return state;
    }
  
  
}
  