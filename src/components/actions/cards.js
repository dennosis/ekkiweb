import api from '../Api'




export function getCards(userId) {
    return dispatch => {
        api.getCards(userId).then((res)=>{
            const cards = res.data;
            dispatch(success(cards));
       });
    };
    function success(cards) { return { type: 'GET_CARDS', cards } }
}

export function deleteCard(userId, cardId) {
    return dispatch => {
        api.deleteCard(userId, cardId).then((res)=>{
            //const cards = res.data;
            console.log(res);
            dispatch(success(cardId));
           // dispatch(getCards())
       });
    };
    function success(id) { return { type: 'DELETE_CARD', id} }
}

export function createCard(userId,cardObj) {
    return dispatch => {
        api.createCard(userId, cardObj).then((res)=>{
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