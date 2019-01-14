import api from '../Api'

export function login(email, password) {
    return dispatch => {
        api.login(email, password)
            .then(res => { 
                    console.log(res)
                    if(res.data.length > 0){
                        dispatch(success(res.data[0]));
                    }else{
                        dispatch(failure())
                        alert("Senha ou Email Incorretos")
                    }
                }
            );
    };

    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
    function failure() { return { type: 'LOGIN_FAILURE'} }
}



export function updateUser(idUser, item) {
    return dispatch => {
        api.updateUser(idUser, item)
            .then(res => { 
                    dispatch(success(res.data));
                }
            );
    };

    function success(user) { return { type: 'SAVE_SUCCESS', user } }
}



export function logout() {
    return dispatch => {
   
        dispatch(success([]));
    };
    

    function success(user) { return { type: 'LOGOUT_SUCCESS', user } }
}



export function createUser(item) {
    return dispatch => {
        api.createUser(item)
            .then(res => { 
                    dispatch(success(res.data));
                    alert("Usuario Registrado")
                }
            );
    };
    function success(user) { return { type: 'REGISTER_SUCCESS', user} }
}






export function  tranferValue(iduserOrig,iduserDest,valueDep,valueDesc) {
    return async dispatch => {
        var userOrig = await editObj(iduserOrig);
        var userDest = await editObj(iduserDest);
        //valueAccount

        var tmpvalueAccount = (parseFloat(userOrig.valueAccount) - parseFloat(valueDesc))
        //userOrig = {...userOrig, valueAccount:tmpvalueAccount}
        userOrig.valueAccount = tmpvalueAccount;
        var tmpvalueAccountDep = (parseFloat(userDest.valueAccount) + parseFloat(valueDep))
        //userDest = {...userDest, valueAccount:tmpvalueAccountDep}
        userDest.valueAccount = tmpvalueAccountDep;

        await api.updateUser(iduserDest,userDest)
        
        await api.updateUser(iduserOrig, userOrig).then((res)=>{
            dispatch(success(res.data));
        });

    };

    function editObj(id){
        return api.getUserById(id)
            .then(resp => {
                return resp.data   
            })
    
    }

    function success(user) { return { type: 'TRANSFER_VALUE', user}}
}
