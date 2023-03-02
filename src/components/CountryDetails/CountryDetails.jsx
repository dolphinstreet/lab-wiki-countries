import React from "react";
import { useParams } from 'react-router-dom'


const CountriesDetails = ({countries})=>{
    const { code } = useParams();

    const foundCountry = countries.find((country) => {   
        return country.alpha3Code === code;
    });
   

    return (
        <div className="country-details" key={foundCountry.alpha2Code}>
     
            <h3>{foundCountry.name.common}</h3>
            <div className="capital-row"> 
                <h4>
                Capital
                </h4>
                    <p>{foundCountry.capital[0]}</p>
            </div>
            <div className="surface-row"> 
                <h4>
                Area
                </h4>
                    <p>{foundCountry.area}</p>
            </div>
            <div className="borders-row"> 
            <h4>
                Borders
                </h4>
                <ul >
                    {foundCountry.borders.map((borderCountryCode) =>{
                        const foundBorderCountry = countries.find((country) => {   
                             return country.alpha3Code === borderCountryCode
                        })
                        return (
                            <li key={foundCountry.name.common + foundBorderCountry.name.common}>{foundBorderCountry.name.common}</li>
                        )
                     })}
                </ul> 
            </div>

        </div>
    )


}

export default CountriesDetails;