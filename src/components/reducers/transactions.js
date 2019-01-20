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
            let tmptransaction 
            const transaction = action.transaction

            if(transaction.transBefore){
                tmptransaction = state.filter(item => item._id !== transaction.transBefore);
            }else{
                tmptransaction = state
            }
            return  [transaction, ...tmptransaction]

        case 'GET_TRANSACTIONS':
            return action.transactions;
    
        
      default:
        return state;
    }
  
  
}
  