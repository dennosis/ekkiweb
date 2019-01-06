import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001'
})


export const loadCards = () => api.get('cards')
export const saveCard = (newItem) => api.post('cards', newItem)

/*export const saveSeries = (newSeries) => api.post('series', newSeries)
export const updateSeries = (series) => api.put('series/'+series.id, series)
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)
export const deleteSeries = (id)=> api.delete('series/'+id)
export const loadSeriesById = (id)=> api.get('series/'+id)*/

const apis = {
    loadCards,
    saveCard

}

export default apis