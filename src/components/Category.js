import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Category = ({category}) => {
  return (
    <Link className='category-item' to={`/categories/${category.strCategory}`}>
      {category.strCategory}
    </Link>
  )
}

export default Category