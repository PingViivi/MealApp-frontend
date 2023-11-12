import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Categories from "./components/Categories"
import CategoriesService from './services/categories'
import Meals from "./components/Meals"
import Home from './components/Home'

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
      <Router>
      <div>
        <Link to="/categories">Categories</Link>
        <Link to="/">Home</Link>
      </div>
        <Routes>
          <Route path="/categories" element={<Categories categories={categories}/>} />
          <Route path="/categories/:category" element={<Meals/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
