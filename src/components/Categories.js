import React from 'react'
import { useEffect, useState } from 'react'
import Category from './Category'
import CategoriesService from '../services/categories'

const Categories = () => {
    const [categories, setCategories] = useState([]) 
    useEffect(()=> {
    CategoriesService
    .getAll()
    .then(initialCategories => {
        setCategories(initialCategories)
    })
    }, [])

  return (
    <>
        {
            categories.categories?.map((categoryObject) => (
                <Category categoryObject={categoryObject} key={categoryObject.idCategory}/>
            ))
        }        
    </>
  )
}

export default Categories