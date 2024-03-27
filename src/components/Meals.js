import React from 'react'
import { useEffect, useState } from 'react'
import Mealservice from '../services/meals'
import MyRecipesservice from '../services/myrecipes'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Meal from './Meal'
import Banner from './Banner'
import Categories from '../services/categories'

const Meals = (props) => {
  const [meals, setMeals] = useState([]);
  const params = useParams();
  const category = params.category
  const [like, setLike] = useState(false);
  useEffect(()=> {
    Mealservice
    .getMealsByCategory(category)
    .then(initialMeals => {
      setMeals(initialMeals)
    })
  }, [])
  
  const likeHandler = async (id) => {
    const meal = meals.meals.find(meal => meal.idMeal === id)
    try {
      let foundRecipes = await MyRecipesservice.findRecipeByName(meal.strMeal);
      if (foundRecipes) {
        console.error(meal.strMeal, 'recipe already in db');
        // Here it should delete it from the database
      } else {
        await Mealservice.saveRecipe(meal);
        console.log('Recipe saved');
      }
    } catch (error) {
        console.error('Error while finding recipe:', error);
    }
    
  }

  return (
    <>
      <h1>{category} recipes</h1>
      {
        meals.meals?.map((meal) => (
          <Meal isliked={meal.liked} like={likeHandler} category={category} meal={meal} key={meal.idMeal}/>
        ))
      }        
    </>
  )
}

export default Meals