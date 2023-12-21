import React from 'react'
import Category from './Category'
import { useParams } from 'react-router-dom'

const Categories = (props) => {
  const categories = props.categories
  console.log(props.current(categories))
  return (
    <section>
      <div className='container flex'>
        {
          categories.categories?.map((category) => (
            <Category category={category} key={category.idCategory}/>
          ))
        }        
      </div>
    </section>
  )
}

export default Categories