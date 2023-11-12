import React from 'react'

const Category = ({categoryObject}) => {
    console.log(categoryObject)
  return (
    <div>
        <img src={categoryObject.strCategoryThumb} alt={categoryObject.strCategory} />
        <h3>
            {categoryObject.strCategory}
        </h3>
        <div>
            {categoryObject.strCategoryDescription}
        </div>
    </div>
  )
}

export default Category