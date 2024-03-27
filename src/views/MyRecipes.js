import React from 'react'
import { useEffect, useState } from 'react'
import MyRecipesService from '../services/myrecipes'
import Banner from '../components/Banner'

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]) 
  useEffect(()=> {
    MyRecipesService
    .getMyRecipes()
    .then(initialRecipes => {
      setRecipes(initialRecipes)
    })
  }, [])
  console.log(recipes)
  return (
    <>
    <Banner title='My Recipes'/>
    {
      recipes?.map((recipe) => (
        <div>
          {recipe.name}
        </div>
      ))
    }        
  </>
  )
}

export default MyRecipes