import React from "react";
import { Link } from "react-router-dom";

const CountriesList = ({countries})=>{
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
        
        <div className="list-group">
        {countries.map(country =>{
            return(
                <div key={country.alpha2Code} className="list-group-item list-group-item-action">
                    <Link to={country.alpha3Code}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}alt="{country.name.common} flag"/>
                        <h3>{country.name.common}</h3>
                    </Link>
                </div>
            )
        })}
        </div>
        </div>
    )


}

export default CountriesList;