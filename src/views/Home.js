import React from 'react'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
      <Banner title='Homescreen'/>
      <p>Hello user, this <strong>MealApp</strong>. Here you can: </p>
      <ol>
        <li>
          Search recipes for your personal recipe library by liking them.
        </li>
        <li>
          You can view your recipes, edit them and use them for your cookings. 
        </li>
        <li>
          You can generate a meal plan for your week.
        </li>
      </ol>
    </>
  )
}

export default Home