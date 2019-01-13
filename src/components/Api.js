import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const loadCards = () => api.get('cards')
export const saveCard = (userId, newItem) => api.post('user/'+userId+'/cards', newItem)
export const deleteCard = (userId, id)=> api.delete('cards/'+id)
export const createCard = (userId, item) => api.post('cards', item)
export const updateCard = (item) => api.put('cards/'+item.id, item)

export const login = (email,pass) => api.get('user?email='+email+'&&password='+pass+"")

export const getContacts = (iduser) => api.get('contacts')

export const getUserById = (id) => api.get('user/'+id)
export const deleteContact = (idUser, idContact) => api.delete('contacts/'+idContact)

export const getUserByAccount = (idUser, account) => api.get('user?account='+account)
export const getUserByCpf = (idUser, cpf) => api.get('user?cpf='+cpf)
export const getContactById = (idUser, id) => api.get('contacts?idUser='+id)
export const addContact = (userId, item) => api.post('contacts', item)

export const getUserByName = (idUser, fname, lname) => {
  if(lname.length > 0){
    lname = '&&lastName='+lname;
  }
  return api.get('user?firstName='+fname+""+lname)
}


const apis = {
    loadCards,
    saveCard,
    deleteCard,
    createCard,
    updateCard,
    login,
    getContacts,
    getUserById,
    deleteContact,
    getUserByName,
    getUserByAccount,
    getUserByCpf,
    getContactById,
    addContact
}

export default apis
/*
{
    "id":25,
    "type": "",
    "number": "43243255",
    "codeVerf": "3423432",
    "dtExp": "",
    "country": "2"
  },
  {
    "id":28,
    "type": "",
    "number": "300131231",
    "codeVerf": "321321",
    "dtExp": "",
    "country": ""
  },
  {
    "type": "2",
    "number": "1561468719817",
    "codeVerf": "4845",
    "dtExp": "2222-02-02",
    "country": "",
    "id":29
  },
  {
    "type": "",
    "number": "518489748749",
    "codeVerf": "9720001",
    "dtExp": "5000-05-05",
    "country": "",
    "id":30
  }
  */