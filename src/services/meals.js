import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/categories/';

const getMealsByCategory = (category) => {
    const request = axios.get(baseUrl + category);
    return request.then(response => response.data);
};

const saveRecipe = async (meal) => {
    const mealUrl = 'http://localhost:3001/db/myrecipes'; 
    let name = meal.strMeal;
    console.log(name);
    try {
        alert('submitted')
        await axios.post(mealUrl, { 
            name 
        });
        
    } catch (error) {
        throw new Error('Failed to save recipe frontendside');
    }
};
  
export default { 
    getMealsByCategory: getMealsByCategory, 
    saveRecipe: saveRecipe,
};