import api from '../Api'

export function createTransaction(token,transaction) {
    return dispatch => {
        api.createTransaction(token, transaction)
            .then(
                res=>{ 
                    dispatch(success(res.data.transaction));
                },
                error=>{
                    dispatch(failure(error.response.data.error));
                }
        )
    }

    function success(transaction) { return { type: 'CREATE_TRANSACTION', transaction}}
    function failure(error) { return { type: 'FAILURE_CREATE_TRANSACTION', error}}
}





export  function  getTransactions(token) {
    return dispatch => {

        api.getTransactions(token)            
            .then(
                res => { 
                    //console.log(res)
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









/*
        var alltransactions = [];
        
        alltransactions = await api.getTransactions(idUser, 1)
            .then((res) => { 
                
                    var transactions = [];
                    transactions = res.data.map(function(element) {

                        return editObj(element.id, element.idUserDest, 1, element.value, element.idcard, element.valuecard, element.date, element.isConfirmed)
                            
                    });
                        
                    return Promise.all(transactions).then(function(values) {
                        return values;
                    });
                } 
            );


        alltransactions = [ ...alltransactions, ... await api.getTransactions(idUser, 2)
            .then((res) => { 
                
                    var transactions = [];
                    transactions = res.data.map(function(element) {

                        return editObj(element.id, element.idUserOrig, 2, element.value, '', '', element.date, element.isConfirmed)
                            
                    });
                        
                    return Promise.all(transactions).then(function(values) {
                        return values
                    });
                } 
            )];
            
           await dispatch(success(alltransactions));
    };



    function editObj(id, idUser, typetransation, value, idcard, valuecard, date, isConfirmed){
        return api.getUserById(idUser)
            .then(resp => {
                return {
                    id,
                    idUser,
                    nameUser: resp.data.firstName,
                    account: resp.data.account,
                    img: resp.data.img,
                    typetransation,
                    value,
                    idcard,
                    valuecard,
                    date,
                    isConfirmed
                }   
            })
    */




/*


                        //typetransation: 1-emitida; 2-recebida
                       var typetransation, usertransation, cardtransation
                       if(element.idUserOrig === idUser){
                            typetransation = 1
                            usertransation = element.idUserDest 
                            cardtransation = element.idcard
                            valuecardtransation =  element.valuecard

                       }else{
                            typetransation = 2
                            usertransation = element.idUserOrig 
                            cardtransation = ''
                            valuecardtransation = ''
                       }


                       "idUserOrig": 1,
                       "idUserDest": "2",
                       "operation": "",
                       "value": "47117",
                       "valuecard": "",
                       "idcard": "29",
                       "date": "",
                       "isConfirmed": false,
                       "id": 3


return api.getUserById(usertransation)
.then(resp => {
    //console.log(resp.data)
    return {
        id:element.id,
        idUser: usertransation,
        nameUser: resp.data.firstName,
        account: resp.data.account,
        typetransation,
        value:element.value,
        idcard:cardtransation,
        valuecard:valuecardtransation,
        date:element.date,
        isConfirmed:element.isConfirmed
    }   
})

*/






/*


export function createTransaction(userId,item) {
    return async dispatch => {
       await api.createTransaction(userId, item).then(async(res)=>{

            var  transac = await editObj(res.data.id, res.data.idUserDest, 1, res.data.value, res.data.idcard, res.data.valuecard, res.data.date, res.data.isConfirmed)
                            
            dispatch(success(transac));
       });
    };


    function editObj(id, idUser, typetransation, value, idcard, valuecard, date, isConfirmed){
        return api.getUserById(idUser)
            .then(resp => {
                return {
                    id,
                    idUser,
                    nameUser: resp.data.firstName,
                    account: resp.data.account,
                    img: resp.data.img,
                    typetransation,
                    value,
                    idcard,
                    valuecard,
                    date,
                    isConfirmed
                }   
            })
    
    }


    function success(transaction) { return { type: 'CREATE_TRANSACTION', transaction}}
}

*/