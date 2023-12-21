import React from 'react'

const RecipeCard = ({recipeobject}) => {
  return (
    <>
        <h1>{recipeobject.strMeal}</h1>
        <div>{recipeobject.strCategory}</div>
        <div>{recipeobject.strArea}</div>
        <div>{recipeobject.strTags}</div>
        <div>{recipeobject.strInstructions}</div>
    </>
  )
}

export default RecipeCard