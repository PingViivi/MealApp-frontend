import React from 'react'
import { useEffect, useState } from 'react'
import Mealservice from '../services/meals'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Meal from './Meal'

const Meals = (props) => {
  const [meals, setMeals] = useState([]);
  const params = useParams();
  const category = params.category
  
  useEffect(()=> {
    Mealservice
    .getMealsByCategory(category)
    .then(initialMeals => {
      setMeals(initialMeals)
      console.log(initialMeals)
    })
  }, [])
  
  return (
    <>
    {
      meals.meals?.map((meal) => (
        <Meal meal={meal} key={meal.idMeal}/>
      ))
    }        
  </>
  )
}

export default Meals