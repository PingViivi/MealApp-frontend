import React from 'react'
import { useEffect, useState } from 'react'
import Mealservice from '../services/meals'
import { useLocation, useParams } from 'react-router-dom'
import Meal from './Meal'

const Meals = (props) => {
  const [meals, setMeals] = useState([]);
  const url = useLocation();
  const currentcategory = url.pathname.replace('/categories/', '');
  
  useEffect(()=> {
    Mealservice
    .getMealsByCategory(currentcategory)
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