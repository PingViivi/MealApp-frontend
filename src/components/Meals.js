import React from 'react'
import { useEffect, useState } from 'react'
import Mealservice from '../services/meals'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Meal from './Meal'
import Banner from './Banner'

const Meals = (props) => {
  const [meals, setMeals] = useState([]);
  const params = useParams();
  const category = params.category
  useEffect(()=> {
    Mealservice
    .getMealsByCategory(category)
    .then(initialMeals => {
      setMeals(initialMeals)
    })
  }, [])
  
  return (
    <>
      <Banner title={'Hae reseptejä'}/>
      <h1>{category} recipes</h1>
      {
        meals.meals?.map((meal) => (
          <Meal category={category} meal={meal} key={meal.idMeal}/>
        ))
      }        
    </>
  )
}

export default Meals