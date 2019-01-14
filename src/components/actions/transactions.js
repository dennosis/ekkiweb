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





export  function  getTransactions(idUser) {
    return async dispatch => {

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
    
    }





    function success(transactions) { return { type: 'GET_TRANSACTIONS', transactions } }
}















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