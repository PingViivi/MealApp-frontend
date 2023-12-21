import React from 'react'
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <>
        <Link to="/">Home</Link> 
        <Link to="/search-recipes">Search recipes</Link> 
        <Link to="/myrecipes">My Recipes</Link> 
        <Link to="/mealplan">Meal plan</Link> 
    </>
  )
}

export default Navigation