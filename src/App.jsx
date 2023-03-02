import './App.css';
import countries from "./countries.json"
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountriesDetails from './components/CountryDetails/CountryDetails';
import { Routes, Route } from 'react-router-dom'


function App() {
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
