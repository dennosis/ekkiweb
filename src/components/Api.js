import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001'
})


export const loadCards = () => api.get('cards')
export const saveCard = (userId, newItem) => api.post('user/'+userId+'/cards', newItem)
export const deleteCard = (userId, id)=> api.delete('cards'+id)
export const createCard = (userId, item) => api.post('cards', item)
export const updateCard = (item) => api.put('cards/'+item.id, item)
//export const getConcats = (item) => api.put('cards/'+item.id, item)

export const login = (email,pass ) => api.get('user?email='+email+'&&password='+pass+"")


const apis = {
    loadCards,
    saveCard,
    deleteCard,
    createCard,
    updateCard,
    login
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