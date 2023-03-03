import {React, useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom'


const CountriesDetails = ({countries})=>{
    const { code } = useParams();
    console.log(countries)
    const [country, setCountry] = useState(null);
    const foundCountry = countries.find((country) => {   
        return country.alpha3Code === code;
    });
   
    useEffect(() => {
        async function fetchCountry() {
          const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${code}`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          console.log("hereee")
          setCountry(data);
        }
        fetchCountry();
      }, [code]);

      if(!countries.length){
        console.log("no countries yet")
        return 
     
       }
    return (
        <div className="col-7" key={foundCountry.alpha2Code}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}alt="{country.name.common} flag"/>
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
            <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{foundCountry.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Capital</td>
                        <td>{foundCountry.area}km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                 {foundCountry.borders.map((borderCountryCode) =>{
                                    const foundBorderCountry = countries.find((country) => {   
                                    return country.alpha3Code === borderCountryCode
                                    })
                                    return (
                                        <Link to={"../"+foundBorderCountry.alpha3Code}>
                                            <li key={foundCountry.name.common+foundBorderCountry._id} style={{listStyle:"none"}}>
                                                {foundBorderCountry.name.common}
                                            </li>
                                        </Link>
                                    )
                                 })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )


}

export default CountriesDetails;


              
            
                
                
        
    