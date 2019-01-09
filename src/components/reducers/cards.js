
export default function cards(state = [], action) {
    switch (action.type) {
    

      case 'GET_CARDS':
            const cards = action.cards
            //console.log(cards)        
          return cards;
      
      case 'DELETE_CARD':
          //const cards = action.cards
          //console.log(cards)        
      return state;
            

      case 'CREATE_CARD':
          const card = action.card
          const qstate = [...state, 
            {...card}
          ]
          return qstate

      case 'UPDATE_CARD':
         
          
          return state
        
        
      default:
        return state;
    }
  
  
}
  