// import React, { useState } from 'react'
// import "../WeatherAPI/index.scss"
// import axios from 'axios';


// const WeatherAPI = () => {
//     const [data, setData] = useState({})
//     const [location, setLocation] = useState('')

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=40e74b33ffef65718166918f5ff80f6b
// `

// const searchLocation = () => {
//   axios.get(url).then((response) => {
//     setData(response.data)
//     console.log(response.data)
//   })
// }


//   return (
//     <div className='app'>
//       <div className='app--container'>
//         <input
//           type="text"
//           placeholder='Search for a city'
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <button onClick={searchLocation}>Search</button>
//         <div className='app--container__static'>
//           <p className='tempItem'>Min</p>
//           <p className='tempItem'>Max</p>
//           <p className='tempItem'>City</p>
//         </div>
//         <div className='app--container__city'>
//           <p className='temp'>18</p>
//           <p className='temp'>27</p>
//           <p className='cityName'>{data.name}</p>
//         </div>
//         <div className='app--container__city'>
//           <p className='temp'>18</p>
//           <p className='temp'>27</p>
//           <p className='cityName'>Brasília</p>
//         </div>
//         <div className='app--container__city'>
//           <p className='temp'>18</p>
//           <p className='temp'>27</p>
//           <p className='cityName'>Brasília</p>
//         </div>
//       </div>
        
//     </div>
//   )
// }

// export default WeatherAPI

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../WeatherAPI/index.scss';

const WeatherAPI = () => {
  const cities = ['London', 'Brasilia', 'Washington', 'Berlin', 'Buenos Aires'];

  const [citiesWeather, setCitiesWeather] = useState([]);

  useEffect(() => {
    async function fetchWeatherData() {
      const apiKey = '40e74b33ffef65718166918f5ff80f6b';
      const weatherPromises = cities.map(async (city) => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          );

            const kelvinToCelcius = (kelvin) => (kelvin -  273.15).toFixed(1);

          return {
            name: city,
            temp: kelvinToCelcius(response.data.main.temp),
            temp_max: kelvinToCelcius(response.data.main.temp_max),
          };
        } catch (error) {
          console.error(`Error fetching weather data for ${city}:`, error);
          return null;
        }
      });

      const weatherData = await Promise.all(weatherPromises);
      setCitiesWeather(weatherData.filter((data) => data !== null));
    }

    fetchWeatherData();
  }, [cities]);

  return (
    <div className='app'>
      <div className='app--container'>
        {citiesWeather.map((city) => (
          <div className='app--container__city' key={city.name}>
            <p className='temp'>{city.temp}</p>
            <p className='temp'>{city.temp_max}</p>
            <p className='cityName'>{city.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherAPI;