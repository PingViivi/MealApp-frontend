import React from 'react'
import { Link } from 'react-router-dom'

const Meal = (props) => {
  const meal = props.meal
  const category = props.category
  // /categories/:category/:meal
  return (
    <div>
      <Link to={`/categories/${category}/${meal.idMeal}`}>
        {meal.strMeal}
      </Link>
    </div>
  )
}

export default Meal