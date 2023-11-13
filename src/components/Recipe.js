import React from 'react'
import { useEffect, useState } from 'react'
import Recipeservice from '../services/recipe'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import RecipeCard from './RecipeCard'

const Recipe = (props) => {
  const [recipe, setRecipe] = useState([]);
  const params = useParams();
  const meal = params.meal
  
  useEffect(()=> {
    Recipeservice
    .getRecipe(meal)
    .then(initialRecipe => {
      setRecipe(initialRecipe)
    })
  }, [])
  
  return (
    <>
      {
        recipe.recipe?.map((recipeobject) => (
          <RecipeCard recipeobject={recipeobject}/>
        ))
      }        
    </>
  )
}

export default Recipe