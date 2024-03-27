import React from 'react'

const RecipeCard = ({recipeobject}) => {
  console.log(recipeobject)
  return (
    <>
      <h1>{recipeobject.strMeal}</h1>
      <span>{recipeobject.idMeal}</span>
      <div>{recipeobject.strCategory}</div>
      <div>{recipeobject.strArea}</div>
      <div>{recipeobject.strTags}</div>
      
      <h2>Ingredients</h2>
      <div>{recipeobject.strMeasure1} {recipeobject.strIngredient1}</div>
      <div>{recipeobject.strMeasure2} {recipeobject.strIngredient2}</div>
      <div>{recipeobject.strMeasure3} {recipeobject.strIngredient3}</div>
      <div>{recipeobject.strMeasure4} {recipeobject.strIngredient4}</div>
      <div>{recipeobject.strMeasure5} {recipeobject.strIngredient5}</div>
      <div>{recipeobject.strMeasure6} {recipeobject.strIngredient6}</div>
      <div>{recipeobject.strMeasure7} {recipeobject.strIngredient7}</div>
      <div>{recipeobject.strMeasure8} {recipeobject.strIngredient8}</div>
      <div>{recipeobject.strMeasure9} {recipeobject.strIngredient9}</div>
      <div>{recipeobject.strMeasure10} {recipeobject.strIngredient10}</div>
      <div>{recipeobject.strMeasure11} {recipeobject.strIngredient11}</div>
      <div>{recipeobject.strMeasure12} {recipeobject.strIngredient12}</div>
      <div>{recipeobject.strMeasure13} {recipeobject.strIngredient13}</div>
      <div>{recipeobject.strMeasure14} {recipeobject.strIngredient14}</div>
      <div>{recipeobject.strMeasure15} {recipeobject.strIngredient15}</div>
      <div>{recipeobject.strMeasure16} {recipeobject.strIngredient16}</div>
      <div>{recipeobject.strMeasure17} {recipeobject.strIngredient17}</div>
      <div>{recipeobject.strMeasure18} {recipeobject.strIngredient18}</div>
      <div>{recipeobject.strMeasure19} {recipeobject.strIngredient19}</div>
      <div>{recipeobject.strMeasure20} {recipeobject.strIngredient20}</div>

      <h2>Instructions</h2>
      <div>{recipeobject.strInstructions}</div>
    </>
  )
}

export default RecipeCard