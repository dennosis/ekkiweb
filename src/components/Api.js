import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001'
})


export const login = (authenticate) => api.post('login/authenticate', authenticate)
export const createUser = (user) => api.post('login/register', user)

export const updateUser = (token, user) => api.put('user/'+user._id, user, {headers: {'Authorization': 'Bearer ' + token}})

export const getCards = (token) => api.get('cards', {headers: {'Authorization': 'Bearer ' + token}})
export const deleteCard = (token, idCard)=> api.delete('cards/'+idCard, {headers: {'Authorization': 'Bearer ' + token}})
export const updateCard = (token, card) => api.put('cards/'+card._id, card, {headers: {'Authorization': 'Bearer ' + token}})
export const createCard = (token, card) => api.post('cards', card, {headers: {'Authorization': 'Bearer ' + token}})


export const getTransactions = (token) => api.get('transactions', {headers: {'Authorization': 'Bearer ' + token}})
export const createTransaction = (token, transaction) => api.post('transactions',transaction, {headers: {'Authorization': 'Bearer ' + token}})

export const getContacts = (token) => api.post('contacts/find',{},{headers: {'Authorization': 'Bearer ' + token}})
export const findContacts = (token, find) => api.post('contacts/find',find,{headers: {'Authorization': 'Bearer ' + token}} )
export const deleteContact = (token, idContact) => api.delete('contacts/'+idContact, {headers: {'Authorization': 'Bearer ' + token}})
export const addContact = (token, contact) => api.post('contacts', contact, {headers: {'Authorization': 'Bearer ' + token}})

const apis = {
    getCards,
    deleteCard,
    createCard,
    updateCard,
    login,
    getContacts,
    deleteContact,
    addContact,
    updateUser,
    createTransaction,
    getTransactions,
    createUser,
    findContacts
}

export default apis
