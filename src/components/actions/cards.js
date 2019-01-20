import api from '../Api'


export function getCards(token) {
    return dispatch => {
        api.getCards(token)
            .then(
                res=>{
                    dispatch(success(res.data.cards))
                },
                error=>{
                    dispatch(failure(error.response.data.error))
                }
        )
    }

    function success(cards) {return {type: 'GET_CARDS', cards}}
    function failure(error) {return {type: 'FAILURE_LOAD_CARDS', error}}
}


export function deleteCard(token, cardId) {
    return dispatch => {
        api.deleteCard(token, cardId).then( 
            res=>{
                dispatch(success(cardId));
            }, 
            error=>{
                dispatch(failure(error));
            }
        );
    };
    function success(id) { return { type: 'DELETE_CARD', id} }
    function failure(error) {return {type:'FAILURE_DELETE_CARD', error}}
}



export function createCard(token,cardObj) {
    return dispatch => {
        api.createCard(token, cardObj).then(
            res=>{
                dispatch(success(res.data.card));
            }, 
            error=>{
                dispatch(failure(error.response.data.error));
            }
        );
    };
    function success(card) { return { type: 'CREATE_CARD', card}}
    function failure(error) {return {type:'FAILURE_CREATE_CARD', error}}
}





export function updateCard(token, card) {
    return dispatch => {
        api.updateCard(token, card).then(
            res=>{
                dispatch(success(res.data.card));
            },
            error=>{
                dispatch(failure(error.response.data.error));
            }
        )
    }
    function success(card) { return { type: 'UPDATE_CARD', card}}
    function failure(error) {return {type:'FAILURE_UPDATE_CARD', error}}
}