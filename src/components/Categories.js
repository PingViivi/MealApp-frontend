import React from 'react'
import Category from './Category'

const Categories = ({categories}) => {

  return (
    <>
      {
        categories.categories?.map((category) => (
          <Category category={category} key={category.idCategory}/>
        ))
      }        
    </>
  )
}

export default Categories