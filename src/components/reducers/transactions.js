export default function transactions(state = [], action) {
    switch (action.type) {
    
/*
      case 'GET_CARDS':
            const cards = action.cards
            //console.log(cards)        
          return cards;
      
      case 'DELETE_CARD':
      
        const qcards = state.filter(item => item.id !== action.id);
       // console.log(state)
        return qcards
        
        //return {...state,cards: qcards};
            */

        case 'CREATE_TRANSACTION':
          const transaction = action.transaction
         
            return  [transaction, ...state]

        case 'GET_TRANSACTIONS':
            return action.transactions;
    
        
      default:
        return state;
    }
  
  
}
  