import {
  BrowserRouter as Router,
  Routes, Route, Link, useParams, useNavigation, useLocation
} from 'react-router-dom'

import { useEffect, useState } from 'react'
import CategoriesService from './services/categories'
import './styles/app.css'
import Categories from "./components/Categories"
import Meals from "./components/Meals"
import Recipe from "./components/Recipe"
import Navigation from './components/Navigation'
import Home from './views/Home'
import RecipeSearch from './views/RecipeSearch'
import MealPlan from './views/MealPlan'
import MyRecipes from './views/MyRecipes'

function App() {
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
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/categories/:category/:meal" element={<Recipe/>} />
          <Route path="/categories" element={<Categories categories={categories}/>} />
          <Route path="/categories/:category" element={<Meals/>} />
          <Route path="/" element={<Home />} />
          <Route path="/search-recipes" element={<RecipeSearch/>} />
          <Route path="/mealplan" element={<MealPlan/>} />
          <Route path="/myrecipes" element={<MyRecipes/>} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
