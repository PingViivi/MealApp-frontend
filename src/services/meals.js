import axios from 'axios'

const getMealsByCategory = (category) => {
    const baseUrl = 'http://localhost:3001/api/categories/' + category
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
  
export default { 
    getMealsByCategory: getMealsByCategory, 
}