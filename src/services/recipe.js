import axios from 'axios'

const getRecipe = (meal) => {
    const baseUrl = 'http://localhost:3001/api/meals/' + meal
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
  
export default { 
    getRecipe: getRecipe, 
}