import React from 'react'
import { Link } from 'react-router-dom'

const Meal = (props) => {
  const meal = props.meal
  const isliked = props.isliked
  const category = props.category
  // /categories/:category/:meal
  return (
    <div>
      <button onClick={()=>props.like(meal.idMeal)}> {isliked ? 'Tykätty' : 'Tykkää'}</button>
      <Link className='meal-item' to={`/categories/${category}/${meal.idMeal}`}>
        {meal.strMeal}
      </Link>
    </div>
  )
}

export default Meal