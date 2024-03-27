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
import Banner from '../components/Banner'
  

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
                <Banner title={'Search recipes'} description={'You can search recipes here by category'}/>
                <Categories categories={categories} current={()=>useLocation}/>
            </div>
        </>
    )
}

export default RecipeSearch