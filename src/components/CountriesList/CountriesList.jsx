import React from "react";
import { Link } from "react-router-dom";

const CountriesList = ({countries})=>{
    return (
        <ul>
        {countries.map(country =>{
            return(
                <li key={country.alpha2Code}>
                    <Link to={country.alpha3Code}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}alt="{country.name.common} flag"/>
                        <h3>{country.name.common}</h3>
                    </Link>
                </li>
            )
        })}
        </ul>
    )


}

export default CountriesList;