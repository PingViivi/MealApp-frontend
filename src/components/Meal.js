import React from 'react'

const Meal = (props) => {
  const meal = props.meal
  return (
    <div>{meal.strMeal}</div>
  )
}

export default Meal