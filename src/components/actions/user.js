import api from '../Api'

export function login(email, password) {
    return dispatch => {
        api.login({email, password})
            .then(
                res => { 
                    
                    dispatch(success({...res.data.user,token:res.data.token}));
                    alert("bem vindo")
                    /*
                    console.log(res)
                    if(res.data.length > 0){
                        dispatch(success(res.data[0]));
                    }else{
                        dispatch(failure())
                        alert("Senha ou Email Incorretos")
                    }
                    */
                },
                error=> {
                    dispatch(failure(error.response.data.error));
                    alert(error.response.data.error)
                }
            );
    };

    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'LOGIN_FAILURE', error} }
}

export function createUser(item) {
    return dispatch => {
        api.createUser(item)
            .then(
                res => { 
                    dispatch(success({...res.data.user, token:res.data.token}));
                },
                error=> {
                    dispatch(failure(error.response.data.error));
                }

            )
    };
    function success(user) { return { type: 'REGISTER_SUCCESS', user} }
    function failure(error) { return { type: 'REGISTER_FAILURE', error }}
}



export function updateUser(token, user) {

    return dispatch => {
        api.updateUser(token, user)
            .then(
                res => { 
                    dispatch(success(res.data));
                },
                error=>{
                    dispatch(failure(error.response.data.error))
                }
            )
    };

    function success(user) { return { type: 'SAVE_SUCCESS', user } }
    function failure(error) { return { type: 'FAILURE_UPDATE_USER', error } }
}





export function logout() {

    return dispatch => {
   
        dispatch(success([]));
    };
    

    function success(user) { return { type: 'LOGOUT_SUCCESS', user } }
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
