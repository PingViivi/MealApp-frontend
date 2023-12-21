import React from 'react'
import {
    BrowserRouter as Router,
    Routes, Route, Link, useParams, useNavigation, useLocation
  } from 'react-router-dom'
  
  import { useEffect, useState } from 'react'
  import Categories from "../components/Categories"
  import CategoriesService from '../services/categories'
  import Meals from "../components/Meals"
  import Recipe from "../components/Recipe"
  import Home from '../components/Home'
  import '../styles/app.css'
  

const RecipeSearch = () => {
    const [categories, setCategories] = useState([]) 
    useEffect(()=> {
      CategoriesService
      .getAllCategories()
      .then(initialCategories => {
          setCategories(initialCategories)
      })
    }, [])
    return (
        <>
            <div className='wrap'>
                <Categories categories={categories} current={()=>useLocation}/>
            </div>
        </>
    )
}

export default RecipeSearch