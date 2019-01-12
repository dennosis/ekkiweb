import api from '../Api'



export function login(email, password) {
    return dispatch => {
        api.login(email, password)
            .then(res => { 
                    dispatch(success(res.data[0]));
                }
            );
    };

    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
}