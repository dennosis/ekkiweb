import api from '../Api'

export function createTransaction(userId,item) {
    return dispatch => {
        api.createTransaction(userId, item).then((res)=>{
            const transac = res.data;
            dispatch(success(transac));
       });
    };
    function success(transaction) { return { type: 'CREATE_TRANSACTION', transaction}}
}

