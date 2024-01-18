import React from 'react'
import Weather from './components/Weather/Weather'
import "./style/style.css"
import AOS from 'aos'
import "aos/dist/aos.css"

const App = () => {

  AOS.init()

  return (
    <div className='App'>
      <Weather />
    </div>
  )
}

export default App