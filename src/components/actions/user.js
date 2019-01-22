import api from '../Api'

export function login(email, password) {
    return dispatch => {
        api.login({email, password})
            .then(
                res => { 
                    dispatch(success({...res.data.user,token:res.data.token}));
                },
                error=> {
                    dispatch(failure(error.response.data.error));
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


