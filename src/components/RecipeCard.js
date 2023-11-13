import React from 'react'

const RecipeCard = ({recipeobject}) => {
  return (
    <>
        <div>{recipeobject.strMeal}</div>
        <div>{recipeobject.strCategory}</div>
        <div>{recipeobject.strArea}</div>
        <div>{recipeobject.strTags}</div>
        <div>{recipeobject.strInstructions}</div>
    </>
  )
}

export default RecipeCard