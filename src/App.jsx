import './App.css';
//import countriesJson from "./countries.json"
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountriesDetails from './components/CountryDetails/CountryDetails';
// import { Routes, Route, useParams } from 'react-router-dom'
 import { Routes, Route } from 'react-router-dom'

import React, { useEffect, useState } from 'react'




function App() {
  const [countries, setCountries]=useState([])
  //  const { code } = useParams()
  const apiUrl = `https://ih-countries-api.herokuapp.com/countries/`

 

  useEffect(() => {
    async function fetchCountries() {
      try {
        const raw = await fetch(apiUrl)
        const res = await raw.json()
        setCountries(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCountries()
  }, [apiUrl]
  )

  return (
    <div className="App">
      <Navbar/>
     
       <div className="container">
        <div className="row">
          <CountriesList countries={countries}/>
          <Routes>
            <Route path=":code" element={<CountriesDetails countries={countries}/>} />
          </Routes>
            {/* React-Router Route rendering the CountryDetails should go here */}
           
        </div>
      </div> 
  </div> 
  )
}

export default App;
