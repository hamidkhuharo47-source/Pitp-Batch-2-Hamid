import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weather, setWeather ] = useState()
  const [city, setCity] = useState('')
  const fetchWeather = async () => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=220105b3f11d464087c112237253112&q=${city}&aqi=no`)
  const data = await response.json()
  setWeather(data)
  }

  return (
    <>
     <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="enter city name here.." />
     <h1>{weather?.location.name}</h1>
     <h2>{weather?.current.temp_c}°C</h2>
     <h2>Condition:<img src={weather?.current.condition.icon} />{weather?.current.condition.text}</h2>
     <button type="button" onClick={fetchWeather}>Show Weather</button>
    </>

  )

}

export default App
