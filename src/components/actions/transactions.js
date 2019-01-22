import api from '../Api'

export function createTransaction(token,transaction) {
    return dispatch => {
        api.createTransaction(token, transaction)
            .then(
                res=>{ 
                    dispatch(success(res.data.transaction));
                    dispatch(updateValueAccount(res.data.valueAccount));
                },
                error=>{
                    dispatch(failure(error.response.data.error));
                }
        )
    }

    function success(transaction) { return { type: 'CREATE_TRANSACTION', transaction}}
    function failure(error) { return { type: 'FAILURE_CREATE_TRANSACTION', error}}
    function updateValueAccount(value) { return { type: 'ALTER_VALUE_ACCOUNT', value}}
}





export  function  getTransactions(token) {
    return dispatch => {

        api.getTransactions(token)            
            .then(
                res => { 
                    dispatch(success(res.data.transactions));
                },
                error=> {
                    dispatch(failure(error.response.data.error));
                }
            )
    }

    function success(transactions) { return { type: 'GET_TRANSACTIONS', transactions } }
    function failure(error) { return { type: 'FAILURE_LOAD_TRANSACTIONS', error } }
}


