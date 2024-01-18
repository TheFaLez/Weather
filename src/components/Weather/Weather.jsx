import React, { useEffect, useState } from 'react'
import "./WeatherStyle/style.css"
import "./WeatherStyle/responsive.css"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchWeather } from '../../store/weatherSlice'
const Weather = () => {


  const weather = useSelector(state => state.weather.weather)

  const [searchState, setSearchState] = useState()

  const seach = (e) => {
    setSearchState(e.target.value)
  }

  const searchBtn = () => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=fa1e04a97a1048989cb20516241501%20&q=${searchState}&aqi=no`)
      .then((response) => {
        if (response.ok) {
          dispatch(fetchWeather(searchState))
        }
        else {
          return
        }
      })
    setSearchState('')
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("London"))
  }, [])

  return (
    <div className='weather'>
      <div className="weather-back">
        <div className='weather-day'>
          <div className="weather-date">
            <h3 data-aos="fade-right">{weather.location.name}</h3>
            <h4 data-aos="fade-right">{weather.forecast.forecastday[0].date}</h4>
            <div className="search-content">
              <input data-aos="fade-right" onChange={seach} value={searchState} className='weather-date-input' type="text" placeholder='Search...' />
              <i onClick={searchBtn} className="fa-solid fa-magnifying-glass searchicon"></i>
            </div>
          </div>

          <div className="weather-main" data-aos="fade-up" >
            <h2 className='weather-main-title'>{weather.current.temp_c}°</h2>
            <div className='weather-main-text'>
              <h2>{weather.current.condition.text}</h2>
              <img src={weather.current.condition.icon} />
            </div>
            <div />

            <div className="weather-postcript-container" data-aos="fade-left">
              <h2 className="weather-postscript">
                <i className="fa-solid fa-wind"></i>
                {weather.current.wind_mph} mph
              </h2>
              <h2 className="weather-postscript">
                <i className="fa-solid fa-droplet"></i>
                {weather.current.humidity} %
              </h2>
            </div>

          </div>

        </div>
        <div className="weather-hour">
          <h2 className='weather-hour-title'>Good Time Of Day</h2>

          <div className="weather-hour-content" data-aos="fade-up">
            <h2 className='weather-content-title'>
              {weather.current.temp_c}°
            </h2>

            <div className="weather-content-container"  >
              <h4 className="weather-content-postscript">
                <i className="fa-solid fa-wind"></i>
                {weather.current.wind_mph} mph
              </h4>
              <h4 className="weather-content-postscript">
                <i className="fa-solid fa-droplet"></i>
                {weather.current.humidity} %
              </h4>
            </div>
          </div>

          <h5 data-aos="fade-up" className='felllike'>Feels like {weather.current.feelslike_c}°</h5>
          <h3 data-aos="fade-up" className='content-postscript'>{weather.current.condition.text}</h3>


          <div className="weather-hour-cards">
            <h2 className='hour-title'>Hourly Forecast</h2>
            {
              weather.forecast.forecastday[0].hour.map((value, index) => {
                if (index == 6) {
                  return (
                    <div data-aos="fade-right" className="weather-card" key={value.time}>
                      <h4 className='hour-time'> 6 AM</h4>
                      <h3>{value.temp_c}°</h3>
                      <h4 className='hour-weather'>{value.condition.text}</h4>
                    </div>
                  )
                }
                if (index == 9) {
                  return (
                    <div data-aos="fade-right" className="weather-card" key={value.time}>
                      <h4 className='hour-time'> 9 AM</h4>
                      <h3>{value.temp_c}°</h3>
                      <h4 className='hour-weather'>{value.condition.text}</h4>
                    </div>
                  )
                }
                if (index == 12) {
                  return (
                    <div data-aos="fade-right" className="weather-card" key={value.time}>
                      <h4 className='hour-time'> 12 AM</h4>
                      <h3>{value.temp_c}°</h3>
                      <h4 className='hour-weather'>{value.condition.text}</h4>
                    </div>
                  )
                }
                if (index == 15) {
                  return (
                    <div data-aos="fade-right" className="weather-card" key={value.time}>
                      <h4 className='hour-time'> 3 PM</h4>
                      <h3>{value.temp_c}°</h3>
                      <h4 className='hour-weather'>{value.condition.text}</h4>
                    </div>
                  )
                }
                if (index == 18) {
                  return (
                    <div data-aos="fade-right" className="weather-card" key={value.time}>
                      <h4 className='hour-time'> 6 PM</h4>
                      <h3>{value.temp_c}°</h3>
                      <h4 className='hour-weather'>{value.condition.text}</h4>
                    </div>
                  )
                }
                if (index == 21) {
                  return (
                    <div data-aos="fade-right" className="weather-card" key={value.time}>
                      <h4 className='hour-time'> 9 PM</h4>
                      <h3>{value.temp_c}°</h3>
                      <h4 className='hour-weather'>{value.condition.text}</h4>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Weather