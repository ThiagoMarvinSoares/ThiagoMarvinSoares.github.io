import React from 'react'
import "./index.scss"
import WeatherAPI from '../../components/WeatherAPI/WeatherAPI'

const Home = () => {
  return (
    <div className='page'>
        <div className='page--content'>
            <div className='page--content__wrap'>
                <h1 className='page--content__title'>Weather Forecast</h1>
                <input type="text" placeholder='Search for a city' className='page--content__searchBar'/>
            </div>
            <h2 className='page--content__secondTitle'>Capitals</h2>
            <div className='page--content__weatherInfo'>
              <WeatherAPI />
            </div>
        </div>
    </div>
  )
}

export default Home