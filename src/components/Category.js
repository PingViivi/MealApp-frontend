import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({category}) => {
  return (
    <div>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <Link to={`/categories/${category.strCategory}`}>
        <h3>
            {category.strCategory}
        </h3>
      </Link>
      <div>
          {category.strCategoryDescription}
      </div>
    </div>
  )
}

export default Category