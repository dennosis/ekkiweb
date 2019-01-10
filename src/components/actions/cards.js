import api from '../Api'


/*

    userService.getContacts(userId)
        .then(contacts => { 
                dispatch(success(contacts));
            }
        );
};
function success(contacts) { return { type: 'GET_CONTACTS', contacts } }
function failure(error) { return { type: 'SERVICE_FAILURE', error } }

*/
/*
export  function loadCards() {
    return dispatch => {
        api.loadCards().then((res)=>{
            //console.log(res.data)
            dispatch(success(res.data))
            //return {type: 'GET_CARDS', cards:res.data};
            //return dispatch => {}
          
        })
    }
    function success(cards) {return {type: 'GET_CARDS', cards}}
}
*/

  /*
export function loadCards() {
    var cards;
        
    api.loadCards().then((res)=>{
         cards = res.data;
        console.log(cards);
    })

     /*
     const cards = [
            {
              "type": "1",
              "codCard": "1",
              "number": "543543534",
              "codeVerf": "4353453",
              "dtExp": "",
              "country": "1",
              "id": 1
            },
            {
              "type": "1",
              "codCard": "1",
              "number": "658685",
              "codeVerf": "58568",
              "dtExp": "",
              "country": "1",
              "id": 2
            },
            {
              "type": "1",
              "codCard": "1",
              "number": "547457",
              "codeVerf": "47547",
              "dtExp": "1444-08-20",
              "country": "1",
              "id": 3
            }
        ];
*
        //console.log(res.data)
       // console.log("aqrr")
        //const cards = [...res.data];
        //console.log(cards);
        return {type: 'GET_CARDS', cards:cards}
      
   
    //function success(cards) {return {type: 'GET_CARDS', cards}
}
*/


export function getCards() {
    return dispatch => {
        api.loadCards().then((res)=>{
            const cards = res.data;
            dispatch(success(cards));
       });
    };
    function success(cards) { return { type: 'GET_CARDS', cards } }
}

export function deleteCard(cardId) {
    return dispatch => {
        api.deleteCard(cardId).then((res)=>{
            //const cards = res.data;
            console.log(res);
            dispatch(success(cardId));
           // dispatch(getCards())
       });
    };
    function success(id) { return { type: 'DELETE_CARD', id} }
}

export function createCard(cardObj) {
    return dispatch => {
        api.createCard(cardObj).then((res)=>{
            const card = res.data;
            console.log(res);
            dispatch(success(card));
            //dispatch(getCards())
       });
    };
    function success(card) { return { type: 'CREATE_CARD', card}}
}





export function updateCard(cardObj) {
    return dispatch => {
        api.updateCard(cardObj).then((res)=>{
            const card = res.data;
            console.log(res);
            dispatch(success(card));
       });
    };
    function success(card) { return { type: 'UPDATE_CARD', card}}
}